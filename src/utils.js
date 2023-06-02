//   =========[GREENSOCK ANIMATION]============
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
export let mm;
function gsapMathcMedia({
  textEl,
  textBoxEl,
  descSecEl,
  mainSecEl,
  hoverTextEl,
  videoEl,
  videoParentEl,
  videoSecEl,
}) {
  // Registering ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Create macthMedia for animation media queries
  mm = gsap.matchMedia();
  const breakpoint = 650;

  // Adding animation on each media query
  mm.add(
    {
      isDesktop: `(min-width: ${breakpoint}px)`,
      isMobile: `(max-width: ${breakpoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions;

      // [Animation for desktop, > 650px screen]
      if (isDesktop) {
        // Opening Text Pinned on the Screen
        ScrollTrigger.create({
          trigger: textBoxEl,
          pin: true,
          start: "center center",
          endTrigger: descSecEl,
          end: "62% center",
          pinSpacing: false,
          pinSpacer: false,
          toggleActions: "restart none reverse reset",
        });

        // Opening Text move to the left side of Description Text
        gsap.to(textBoxEl, {
          xPercent: "-25",
          duration: 1,
          scrollTrigger: {
            trigger: descSecEl,
            start: "top 25%",
            end: "top 0%",
            ease: "Power4",
            scrub: true,
            toggleActions: "play none reverse none",
          },
        });
      }

      // [Animation for desktop OR below desktop < 600px screen]

      // Opening text fading in
      gsap.to(textEl, {
        scrollTrigger: {
          trigger: textBoxEl,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
        y: "0%",
        opacity: "1",
        ease: "sine",
        duration: 0.6,
      });

      // CTA Text below opening text fading in
      gsap.to(hoverTextEl, {
        opacity: "1",
        scrollTrigger: {
          trigger: isDesktop ? descSecEl : textBoxEl,
          start: `${isDesktop ? "38%" : "center"} center`,
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      // Video appear
      gsap.to(videoEl, {
        opacity: "1",
        scale: "1",
        scrollTrigger: {
          trigger: videoSecEl,
          start: "30% bottom",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });

      // Video Container pinned to the screen when appear
      gsap.to(videoParentEl, {
        scrollTrigger: {
          trigger: videoParentEl,
          start: "bottom bottom",
          endTrigger: videoSecEl,
          end: "bottom bottom",
          scrub: true,
          pin: videoParentEl,
          toggleActions: "restart none reverse reset",
          pinSpacer: false,
          pinSpacing: false,
        },
      });

      // Main Section bg color changing
      ScrollTrigger.create({
        trigger: descSecEl,
        start: "top 46%",
        end: "top 45%",
        onEnter: () =>
          gsap.to(mainSecEl, { backgroundColor: "rgb(146, 169, 189)" }),
        onEnterBack: () =>
          gsap.to(mainSecEl, { backgroundColor: "rgb(226, 226, 229)" }),
      });

      // Main Section bg color changing when scrol back from video section
      ScrollTrigger.create({
        trigger: descSecEl,
        start: "70% top",
        onLeaveBack: () =>
          gsap.to(mainSecEl, { backgroundColor: "rgb(226,226,229)" }),
      });
    }
  );
}

export default gsapMathcMedia;
