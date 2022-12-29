# About
It is a strapi project where we are implementing the custom validation. We will be modifying the code before the update callback to perform the following things:
- Total Selected field validation.
- Maintaining the new order of parent relations.
- Custom parents relation fields validation.

### Total Selected field validation.
Checking if a new/updated blog is a highlighted blog and showing an error if highlighted blog count exceeds a certain number.

This check won't allow the user to add more than a given number of highlighted blogs for display.

### Maintaining the new order list of parents' relations.
Updating the current order list of selected parent relations with the new required order list by user/admin and maintaining it by removing the previous order before updating the blog.

The order in which the related parent articles will be shown on the admin UI will be based on this saved order.

### Custom parents relation fields validation.
Checking if the current blog has related parent fields selected and showing an error if the required relations don't exists

Admin must select at least 1 parent category from the given parent categories list.

# Concepts
#### Custom validation
- It is used in total selected field validation, maintaining the new order of parent relations and custom parents relation fields validation


# Tools & Libraries
- Strapi

# Screenshots

- Dashboard
![admin-panel-homepage 5e50b506](https://user-images.githubusercontent.com/15182066/209935458-4bf600bd-74af-4398-a65f-d25bfbf85fcb.png)
----
- Content builder
![a](https://user-images.githubusercontent.com/15182066/209935530-6354912f-460b-418f-996e-88d5660f151c.png)

