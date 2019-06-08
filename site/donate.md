---
layout: simple
title: Donate
description: If you like Bootstrap Table, if your project uses Bootstrap Table, if you want Bootstrap Table do better...
redirect_from:
  - "/zh-cn/donate/"
  - "/es/donate/"
---

Bootstrap Table is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support Bootstrap Table development via the following methods:

<table class="table donate">
<tbody>
  <tr>
    <td width="200"><h3>Give us a Star<br>⭐️⭐️⭐️</h3></td>
    <td><img src="{{ site.base_url }}/assets/images/paypalLogo.png"></td>
    <td><img src="{{ site.base_url }}/assets/images/alipayLogo.png"></td>
    <td><img src="{{ site.base_url }}/assets/images/weixinLogo.png"></td>
    <td><h3>Share The Love</h3></td>
  </tr>
  <tr>
    <td>
      <a class="github-button" href="https://github.com/wenzhixin/bootstrap-table" data-size="large" data-show-count="true" aria-label="Star wenzhixin/bootstrap-table on GitHub">Star</a>
    </td>
    <td>
      <a class="paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZDHP676FQDUT6">
        <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif">
      </a>
    </td>
    <td><img src="{{ site.base_url }}/assets/images/alipay.jpg"></td>
    <td><img src="{{ site.base_url }}/assets/images/weixin.png"></td>
    <td>
      <span style="color: silver;">Share on: </span>
      <div id="share-buttons">
        <a class="twitter" href="http://twitter.com/home?status={{ site.url }}" target="_blank" title="Share this on Twitter">
          {% include icons/twitter.svg %}
        </a>

        <a class="facebook" href="http://www.facebook.com/share.php?u={{ site.url }}" target="_blank" title="Share this on Facebook">
          {% include icons/facebook.svg %}
        </a>

        <a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url={{ site.url }}&amp;title=&amp;summary=&amp;source=" target="_blank" title="Share this on Linkedin">
          {% include icons/linkedin.svg %}
        </a>

        <a class="mail" href="mailto:?&amp;body={{ site.url }}" target="_blank" title="Share this through Email">
          {% include icons/mail.svg %}
        </a>
      </div>

      <p class="share-desc">
      If you like Bootstrap Table, but you do not have any money to spare, please share the love by posting something about this website on social media. You can use the buttons above. They will share the homepage. Thank you, you are the best!
      </p>
    </td>
  </tr>
</tbody>
</table>

{% include opencollective.html %}
