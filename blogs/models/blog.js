"use strict";
const Boom = require("boom");

/*
 *   Handle Error
 *   Displaying the corresponding error on strapi admin UI
 */
const handleError = (message) => {
  const err = new Error(message);
  const boomError = Boom.boomify(err, {
    statusCode: 422,
  });

  throw boomError;
};

/*
 *   Field Validation
 *   Checking if the current blog have related fields selected
 *   Showing error if the required relations doesn't exists
 */
const fieldValidation = (data) => {
  // Check if any of the below relation exist
  const categoryExist = data.hasOwnProperty("category") && data.category.length;
  const masterCategoryExist =
    data.hasOwnProperty("masterCategory") && data.masterCategory.length;
  const subCategoryExist =
    data.hasOwnProperty("subCategory") && data.subCategory.length;

  if (!(categoryExist || masterCategoryExist || subCategoryExist)) {
    handleError(
      "No category or master-category or child-category selected, please select."
    );
  }
};

/*
 *   Highlighted blog Check
 *   Checking if new blog is a highlighted blog
 *   Showing error if highlighted blog count exceeds 3
 */
const highlightedBlogCheck = async (data) => {
  const category = data.Category;
  const queryData = await strapi.connections.default.raw(`
        select count(id) from blogs where Category = '${category}' and highlightedBlog = 1;
    `);
  const highlightedBlogCounter = parseInt(queryData[0][0]["count(id)"]);

  if (highlightedBlogCounter > 2) {
    handleError("3 highlighted blogs have already been selected.");
  }
};

/*
 *   Before Updating blogs
 *   highlighted blogs count check
 *   Checking fields validations
 *   Maintaining Related blogs order changed by user
 */
module.exports = {
  lifecycles: {
    beforeUpdate: async (id, data) => {
      const response = await strapi.query("blog").find({ id: id.id });
      const subCategories = data.category ? data.category.length : 1;

      if (
        data.hasOwnProperty("highlightedBlog") &&
        data.highlightedBlog &&
        data.highlightedBlog !== response[0].highlightedBlog
      ) {
        await highlightedBlogCheck(data);
      }

      if (data.published_at) {
        fieldValidation(response[0]);
      }

      if (response[0].published_at && !subCategories) {
        fieldValidation(data);
      }

      /*
       *   Checking if the current blog is published or not
       *   Deleting the old relation to maintian the order of related categories changed by user/admin
       */
      if (!data.hasOwnProperty("published_at")) {
        await strapi.connections.default.raw(
          `DELETE FROM blogs_category__sub_category_contribution WHERE blog_id = ${id.id}`
        );
      }
    },
  },
};
