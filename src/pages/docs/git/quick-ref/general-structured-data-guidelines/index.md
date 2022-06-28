---
title: General structured data guidelines
template: docs
excerpt: "Google guidelines "
---


# General structured data guidelines

These are the general guidelines that apply to all structured data. These guidelines must be followed to enable structured data to be eligible for inclusion in Google Search results. Pages or sites that violate these content guidelines may receive less favorable ranking or be marked as ineligible for rich results in Google Search in order to maintain a high-quality search experience for our users. If we find that your page contains spammy structured data or content, we will apply a manual action to your page. To check if you have a manual action, open the [Manual Actions report in Search Console](https://search.google.com/search-console/manual-actions).

**Important: Google does not guarantee that your structured data will show up in search results,** even if your page is marked up correctly according to the [Rich Results Test](https://search.google.com/test/rich-results). Here are some common reasons why:

- Using structured data *enables* a feature to be present, it does not *guarantee* that it will be present. The Google algorithm tailors search results to create what it thinks is the best search experience for a user, depending on many variables, including search history, location, and device type. In some cases it may determine that one feature is more appropriate than another, or even that a plain blue link is best.
- The structured data is not representative of the main content of the page, or is potentially misleading.
- The structured data is incorrect in a way that the Rich Results Test was not able to catch.
- The content referred to by the structured data is hidden from the user.
- The page does not meet the guidelines for structured data described here, the type-specific guidelines, or the [general webmaster guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines).

## Technical guidelines

You can test compliance with technical guidelines using the [Rich Results Test](https://search.google.com/test/rich-results) and the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289), which catch most technical errors.

### Format

In order to be eligible for rich results, mark up your site's pages using one of [three supported formats](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data#structured-data-format):

- JSON-LD (recommended)
- Microdata
- RDFa

### Access

Do not block your structured data pages to Googlebot using robots.txt, the `noindex` tag, or any other access control methods.

## []()Quality guidelines

These guidelines are not easily testable using an automated tool. Violating a quality guideline can prevent syntactically correct structured data from being displayed as a rich result in Google Search, or possibly cause it to be [marked as spam](https://support.google.com/webmasters/answer/3498001).

### Content

- Follow the [Google webmasters quality guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines#quality_guidelines).
- Provide up-to-date information. We won't show a rich result for time-sensitive content that is no longer relevant.
- Provide original content that you or your users have generated.
- **Don't** mark up content that is not visible to readers of the page. For example, if the JSON-LD markup describes a performer, the HTML body must describe that same performer.
- **Don't** mark up irrelevant or misleading content, such as fake reviews or content unrelated to the focus of a page.
- **Don't** use structured data to deceive or mislead users. Don't impersonate any person or organization, or misrepresent your ownership, affiliation, or primary purpose.
- Content must not promote pedophilia, bestiality, sexual violence, violent or cruel acts, targeted hatred, or dangerous activities.
- **Don't** mark up content that engages in illegal activities or promotes goods, services, or information that facilitates serious and immediate harm to others. Marking up content that provides information about such content for educational purposes is permitted.
- Content in structured data must also follow the additional content guidelines or policies, as documented in the specific feature guide. For example, content in `JobPosting` structured data must follow the [job posting content policies](https://developers.google.com/search/docs/advanced/structured-data/job-posting#content-policies). Content in Practice problems structured data must follow the [Practice problems content guidelines](https://developers.google.com/search/docs/advanced/structured-data/practice-problems#content-guidelines).

### Relevance

Your structured data must be a true representation of the page content. Here are some examples of irrelevant data:

- A sports live streaming site labeling broadcasts as local events.
- A woodworking site labeling instructions as recipes.

### Completeness

- Specify all required properties listed in the [documentation for your specific rich result type](https://developers.google.com/search/docs/guides/search-gallery). Items that are missing required properties are not eligible for rich results.
- The more recommended properties that you provide, the higher quality the result is to users. For example: users prefer job postings with explicitly stated salaries than those without; users prefer recipes with actual user reviews and genuine star ratings (note that reviews or ratings not by actual users are considered[spammy](https://developers.google.com/search/docs/guides/prototype#self-review)). Rich result ranking takes extra information into consideration.

### Location

- Put the structured data on the page that it describes, unless specified otherwise by the documentation.
- If you have duplicate pages for the same content, we recommend placing the same structured data on all page duplicates, not just on the canonical page.

### Specificity

- Try to use the most specific applicable type and property names defined by schema.org for your markup.
- Follow all additional guidelines given in the [documentation for your specific rich result type](https://developers.google.com/search/docs/guides/search-gallery).

### Images

- When specifying an image as a structured data property, make sure that the image is relevant to the page that it's on. For example, if you define the `image` property of `NewsArticle`, the image must be relevant to that news article.
- All image URLs must be crawlable and indexable. Otherwise, Google Search can't find and display them on the search results page. To check if Google can access your URLs, use the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289).
