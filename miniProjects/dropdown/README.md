# DROPDOWN

The modifier --specificCategory is for more specific targeting, like when you hover over “motors” and want to get the submenu specific for “motors”.

## display inline block

divs inside one full div can be given a display inline block to make them align in one row.

## REM and PADDING

the `rem` unit was introduced to reconcile differences in sizing across various devices

setting things in `px` can be restrictive when resizing  screens

the `em` can be used to go around this`.

The problem with em is that the base size is defined in terms of the element’s parent, which forces developers to have to concern themselves with compounding effects (for example: define a list as a certain em, then a nested list as another em, etc). 

rem is simply em except the base size is always the root font size. This is almost always what you want, except for with cases in which your element’s size stays constant regardless of zoom, like the border width.

## HOVER STYLE

```css
.className:hover {
    // enter your properties here
}
```

to apply the borders on hover, you might need to set the border styles of your divs indidual tabs


## margin 0 auto

this property aligns an item to the center having equal distances from the left and from the right.
