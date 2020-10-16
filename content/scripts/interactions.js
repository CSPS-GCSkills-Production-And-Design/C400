//DO NOT MODIFY ↓
define([
	'jquery'
], function ($) {
	//DO NOT MODIFY ↑

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function () {
				systemReady();

			})
			.on("Framework:pageLoaded", function () {
				pageLoaded();

			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {

		//$("#wb-sttl").append("<p id='module-text' class='num-mod-pos breadcrumb'></p>")
	}

	/* is called on every page load, great for adding custom code to all pages*/
	function pageLoaded() {
		//console.log("Interactions:pageLoaded");

		loadTimeline();
	}
	/* ***********************************************************************
	 *  LOAD TIMELINE
	 * ***********************************************************************
	 * create timeline
	 *
	 *
	 *************************************************************************/
	function loadTimeline() {
		if (!$("html").hasClass("LOM-pageEdit-active") && masterStructure.currentSub.depth > 0) {
			$("h1").closest(".LOM-element").after("<div class='snap-timeline'></div>");
			var $el = $(".snap-timeline");
			$el.html("");
			var sub = masterStructure.currentSub;
			var flat = masterStructure.flatList;
			var sPos, title;
			var $holder, $last;
			if (sub.depth > 0) {
				$el.append("<div class='timeline-holder'></div>");
				$holder = $el.children(".timeline-holder");
				for (var i = 0; i < flat.length; i++) {
					sPos = flat[i].sPosition;
					title = flat[i].title;

					if (flat[i].aPosition[0] === sub.aPosition[0]) {
						$holder.append("<a href='#' class='peg' data-sPosition=\"" + sPos + "\">" + title + "</a>");
						$last = $holder.children(".peg").last();
						if (flat[i] === sub) {
							$last.addClass("current").removeAttr('href').addClass("disabled").append("<span>Current Page</span>");
						} else {
							$last.click(function () {
								fNav($(this).attr("data-sPosition"));
								return false;
							});
						}

					}
				}

			} else {
				$el.html("ERROR");
			}


		}
	}

	initialize();

});
