import React, { useEffect } from "react";
import $ from "jquery";
import WOW from "wowjs";
import "jquery.easing"; 

const ScriptIntegration = () => {
  useEffect(() => {
    // Spinner
    const spinner = () => {
      setTimeout(() => {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();

    // WOW.js Initialization
    new WOW.WOW().init();

    // Sticky Navbar
    const handleScrollNavbar = () => {
      if ($(window).scrollTop() > 45) {
        $(".navbar").addClass("sticky-top shadow-sm");
      } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
      }
    };
    $(window).on("scroll", handleScrollNavbar);

    // Dropdown Hover Effect
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    const handleDropdownHover = () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    };
    $(window).on("load resize", handleDropdownHover);

    // Back-to-Top Button
    const handleScrollTopButton = () => {
      if ($(window).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    };
    $(window).on("scroll", handleScrollTopButton);

    $(".back-to-top").click(() => {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });


    // Modal Video
    let videoSrc;
    $(".btn-play").click(function () {
      videoSrc = $(this).data("src");
    });

    $("#videoModal").on("shown.bs.modal", function () {
      $("#video").attr(
        "src",
        videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function () {
      $("#video").attr("src", videoSrc);
    });

    // Cleanup listeners
    return () => {
      $(window).off("scroll", handleScrollNavbar);
      $(window).off("load resize", handleDropdownHover);
      $(window).off("scroll", handleScrollTopButton);
    };
  }, []);

  return (
    <>

      {/* Navbar */}
      <nav className="navbar">
        <div className="dropdown">
          <button className="dropdown-toggle">Dropdown</button>
          <div className="dropdown-menu">Menu Item</div>
        </div>
      </nav>

      {/* Back-to-Top Button */}
      <button className="back-to-top" style={{ display: "none" }}>
        ↑ Back to Top
      </button>

      {/* Video Modal */}
      <button className="btn-play" data-src="https://your-video-url.com">
        Play Video
      </button>
      <div id="videoModal" className="modal">
        <iframe id="video" src="" frameBorder="0" allowFullScreen></iframe>
      </div>

      {/* Counter-Up */}
      <div data-toggle="counter-up">100</div>

      {/* Carousel (Testimonials) */}
      <div className="testimonial-carousel">
        {/* Add carousel content */}
      </div>
    </>
  );
};

export default ScriptIntegration;
