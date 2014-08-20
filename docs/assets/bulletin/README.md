## Bulletin

A jQuery plugin to show bulletin for website. [demo](http://wenzhixin.net.cn/p/bulletin/)

### How to use:

html + css:
	
	<link rel="stylesheet" href="bulletin.css" />
	<div id="bulletin" class="bulletin">
      <ul>
        <li><a href="http://wenzhixin.net.cn/p/multiple-select/">Multiple Select - Multiple select is a jQuery plugin to select multiple elements with checkboxes.</a></li>
        <li><a href="http://wenzhixin.net.cn/p/bootstrap-login/">Bootstrap Login - Login plugin from for bootstrap.</a></li>
        <li><a href="http://wenzhixin.net.cn/p/bulletin/">Bulletin - A jQuery plugin to show bulletin for website.</a></li>
      </ul>
      <div class="close"><a href="javascript:void(0)">×</a></div>
    </div>
	
js:
	
	<script type="text/javascript" src="jquery.bulletin.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#bulletin').bulletin();
		});
	</script>
	
### Options:

	{
		index: 0,
		interval: 3000,
		speed: 1000,
		direction: 'up' // up or down
	}
	
### Author:

blog: http://wenzhixin.net.cn

email: wenzhixin2010@gmail.com