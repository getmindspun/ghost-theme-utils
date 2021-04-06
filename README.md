![Version](https://img.shields.io/badge/version-1.5.0-blue)
![GitHub](https://img.shields.io/github/license/getmindspun/ghost-theme-utils?label=License)

# ghost-theme-utils

Easily add Ghost functionality to custom themes.

See the blog article
[Everything you need to know about subscription forms in Ghost](https://www.mindspun.com/blog/ghost-subscription-forms/)
for a detailed explanation.

## What's included

* Base functional styles and javascript for subscribe forms.
* Message overlays e.g. for 'Thank you' pages after contact form submission.
* Generic Koenig styles - inclusion of _koenig.scss passes gscan.

Styles include the source SCSS files in addition to generated CSS.

## Demo

You can see this package in action in the following ways.

### Single page demo with simulated Ghost

* https://getmindspun.github.io/ghost-theme-utils/

This is the easiest way to explore the functionality provided by this package.

### As part of the GhostStead default theme

* https://demo.ghoststead.net/

## Usage

### From the CDN (recommended)

```html

<link href="https://cdn.jsdelivr.net/npm/ghost-theme-utils@latest/dist/css/style.min.css" rel="stylesheet">
```

```html

<script src="https://cdn.jsdelivr.net/npm/ghost-theme-utils@latest/dist/js/ghost-theme-utils.min.js" async
        defer></script>
```

The packaged version of the CSS also contains the CSS
from [bootstrap-avatar](https://github.com/getmindspun/bootstrap-avatar). Usage of the above CDN does NOT require either
Bootstrap or jQuery.

### From source

The SCSS sources files may be included in a custom build as usual:

```scss
@import "node_modules/ghost-theme-utils/scss/subscribe"
```

Or you can use the standalone files from the `dist/` directory.

Technically you may add these file only on specific pages, but generally they are included in `default.hbs`

## Subscription

Here's how to get started using the subscription support in your theme.

### Add HTML messages

You need to add HTML to the theme to show the message both on email confirmation failure and error:

```html

<div class="position-fixed top-0 p-4 w-100 text-center text-white bg-success subscribe-notification subscribe-success-message"
     data-autohide="false">
    <a class="btn-close btn-close-white float-end subscribe-close-button" href="javascript:"></a>
    You've successfully subscribed to {{@site.title}}!
</div>
<div class="position-fixed top-0 p-4 w-100 text-center text-white bg-danger subscribe-notification subscribe-failure-message">
    <a class="btn-close btn-close-white float-end subscribe-close-button" href="javascript:"></a>
    Could not sign up! Invalid sign up link.
</div>
```

These messages use Bootstrap classes for styling, but that isn't required.

### Test

During development, the easiest way to test is to navigate to the following URLs on your site:

**Success** : /?action=subscribe&success=true

**Failure** : /?action=subscribe&success=false

If all is working, you should see the corresponding message.

Of course, one deployed, test using the real subscription mechanism in Ghost.

## Forms

Here's how to integrate a contact form into your theme. Contact forms are the most common usage, but this methodology
works with any type of form you want to use.

### Create the form

```html
<div class="form">
    <div class="form-group">
        <label for="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" class="form-control">
    </div>
    <div class="form-group">
        <label for="contact-email">Email</label>
        <input id="contact-email" type="email" name="email" class="form-control">
    </div>
    <div class="form-group">
        <label for="contact-message">Message</label>
        <textarea class="form-control" id="contact-message" name="message" rows="6"></textarea>
    </div>
    <input name="location" type="hidden" value="{{@site.url}}/#thank-you">
    <input name="api_key" type="hidden" value="1234567890abcdefghijklmn">
    <button class="btn btn-primary w-100" type="submit">Write to us</button>
</div>
```
This example is the contact from <https://www.mindspun.com/contact/> and uses the
Mindspun form handler, but any form service will do.  The important thing is to redirect
the user to the anchor #thank-you after form submission.
In this example, the user would be redirected to <https://www.mindspun.com/contact/#thank-you>.

### Add the HTML message

After the form is submitted, a confirmation message is shown as an overlay. The first step is to add the HTML for the
message to the **page where you redirect the user**.  Don't include the HTML
in the page containing the form (unless they are the same page).  For example,
if your form lives at `/contact/` and you return the user to your 
home page at `/` after form submission, then this HTML must be included in the home page.

```html

<div id="thank-you"
     class="bg-white d-flex flex-column justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0 overlay">
    <a class="btn-close p-4 position-fixed top-0 end-0 subscribe-close-button"
       href="javascript:window.location.href=/^[^?#]+/.exec(window.location.href)[0]"></a>
    <p class="display-1">Thank you</p>
</div>
```

The small amount of Javascript in the link simply removes the anchor tag from the URL - in this case #thank-you. For
example if the page URL is `/#thank-you` which causes the overlay to be shown, then clicking the close button
will send the user back `/`.


### Test
You can test style of the 'thank-you' page by navigating to anchor directly.
From the above example, click on <https://www.mindspun.com/contact/#thank-you> and
you'll see the contact form 'thank you' messages without actually
submitting the form.


## Development

```
npm run dev
```

---
This repository is maintained by [Mindspun](https://www.mindspun.com).

