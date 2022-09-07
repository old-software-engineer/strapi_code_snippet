# Strapi Custom Validation

## About
We will be modifying the code for before update callback to perform the following things:
- Total Selected field validation.
- Maintaining the new order of parents relation.
- Custom parents relation fields vaidation.


## Total Selected field validation.
Checking if new/updated blog is a highlighted blog and showing error if highlighted blog count exceeds a certain number.

This check won't allow the user to add more than a given number of highlighted blogs for display.

## Maintaining the new order list of parents relation.
Updating the current order list of selected parent relation with the new required order list by user/admin and maintaining it by removing the previous order before updating the blog.

The order in which the related parent articles will be shown on admin UI will be based on this saved order.

## Custom parents relation fields vaidation.
Checking if the current blog have related parent fields selected and showing error if the required relations doesn't exists

Admin must select atleast 1 parent category from the given parent categories list.