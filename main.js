/**
 * Set your scheduling URL here (e.g. Calendly). When empty, "Book time" uses
 * a mailto link so visitors can still request a conversation.
 */
const BOOKING_URL = "";

(function () {
  function applyBookingLinks() {
    var url = typeof BOOKING_URL === "string" ? BOOKING_URL.trim() : "";
    document.querySelectorAll("a.js-booking").forEach(function (anchor) {
      if (url) {
        anchor.setAttribute("href", url);
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      } else {
        anchor.setAttribute(
          "href",
          "mailto:stephanie@broweradvisory.com?subject=Request%20to%20book%20time&body=Hi%20Stephanie%2C%0A%0AI%27d%20like%20to%20find%20a%20time%20to%20connect.%0A%0A"
        );
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyBookingLinks);
  } else {
    applyBookingLinks();
  }
})();
