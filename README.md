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
![Dashboard](https://user-images.githubusercontent.com/15182066/209615598-1de41133-c1be-44a3-8f3d-0d5017e21653.png)
-----
- Writing content
![Writing content](https://user-images.githubusercontent.com/15182066/209615743-ad0963cf-66ba-478d-a207-2747258a0a5b.png)
-----
- Content type builder
![Content type builder](https://user-images.githubusercontent.com/15182066/209615882-acc53519-525d-4521-a27a-3c5528fe98f7.png)
