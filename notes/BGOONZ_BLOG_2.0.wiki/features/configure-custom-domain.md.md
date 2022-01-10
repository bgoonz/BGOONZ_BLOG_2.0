Configure external DNS for a custom domain
==========================================

If you've assigned an externally registered domain to your site, and you don't want to use [Netlify DNS](https://docs.netlify.com/domains-https/netlify-dns/), you need to configure your external DNS provider to point your domain to Netlify.

To access customized details about the DNS records you need to configure, go to Site settings > Domain management > Custom domains and select Check DNS configuration next to the custom domain.

![The link is between the domain name and the options menu.](https://d33wubrfki0l68.cloudfront.net/171e5e78bfcbea0fec0c5e962483936792de9c1f/89809/images/domains-https-check-dns-configuration.png)

The next steps vary depending on the type of domain or subdomain.

-   For a [subdomain](https://docs.netlify.com/domains-https/custom-domains/#definitions) of a domain you own, such as `blog.petsofnetlify.com` or `www.petsofnetlify.com`, follow the directions below for [subdomain configuration](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-a-subdomain).
-   For an [apex domain](https://docs.netlify.com/domains-https/custom-domains/#definitions) with no subdomain, such as `petsofnetlify.com`, make sure to read our [advice about using apex domains](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains), then follow the directions below for [apex domain configuration](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-an-apex-domain).

Special handling for apex and `www`

If you assign an apex domain or a `www` subdomain to your site, Netlify will automatically add *both* the apex domain and the `www` subdomain. For more information, visit the section on [apex domains and `www` subdomains](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains).

[#](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-a-subdomain)Configure a subdomain
-----------------------------------------------------------------------------------------------------------------------------

To point a subdomain such as `blog.petsofnetlify.com` or `www.petsofnetlify.com` to your site on Netlify, you must create a CNAME record with your DNS provider.

For example, if your site's domain is `blog.petsofnetlify.com` and your [Netlify subdomain](https://docs.netlify.com/domains-https/custom-domains/#definitions) is `brave-curie-671954.netlify.app`:

1.  Find your DNS provider's DNS record settings for your apex domain, `petsofnetlify.com`.
2.  Add a CNAME record with your subdomain, `blog`, as the host.
3.  Point the record to your Netlify subdomain, `brave-curie-671954.netlify.app`.
4.  Save your settings. It may take a full day for the settings to propagate across the global Domain Name System.

If your site uses the `www` subdomain, as in `www.petsofnetlify.com`, you will use the same procedure described above. However, you should also read about our [special handling for `www` subdomains](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains). This handling includes automatically adding the apex domain to your site, which requires an apex domain configuration as described below.

[#](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-an-apex-domain)Configure an apex domain
-----------------------------------------------------------------------------------------------------------------------------------

Unlike subdomains, apex domains don't support CNAME records. You must configure your domain with a single-server A record. The A record points to a single server IP address, which means it can't take advantage of direct DNS routing on a [global CDN like Netlify's](https://www.netlify.com/products/edge/).

Cloudflare exception

If you use Cloudflare as your DNS provider, it supports a special record type that also works well on the bare domain - Flattened CNAME records. This record type is recommended for your bare domain. You'd set the same record value as for your subdomains, such as `brave-curie-671954.netlify.app`.

1.  Find your DNS provider's DNS record settings for your apex domain, such as `petsofnetlify.com`.
2.  Add an A record (or Flattened CNAME record for Cloudflare). Depending on your provider, leave the host field empty or enter `@`.
3.  Point the record to Netlify's load balancer IP address: `75.2.60.5`
4.  Save your settings. It may take a full day for the settings to propagate across the global Domain Name System.

Special handling for apex domains

If you assign an apex domain to your site, Netlify will automatically add a `www` subdomain for the domain as well. To find out how this affects your site configuration, visit the section on [apex domains and `www` subdomains](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains).

[#](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#dns-record-propagation)DNS record propagation
-------------------------------------------------------------------------------------------------------------------------------

Depending on your DNS provider, changes to DNS records can take several hours to propagate and take effect for the entire internet.

If more than 24 hours have passed since you configured your DNS records, and your site is still not accessible at your custom domain, try our [DNS troubleshooting tips](https://docs.netlify.com/domains-https/troubleshooting-tips/#dns-configuration).