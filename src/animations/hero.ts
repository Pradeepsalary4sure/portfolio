import gsap from "gsap";

export const heroAnimation = () => {

  const tl = gsap.timeline();

  tl.from(".hero-greeting", {
    opacity: 0,
    y: 40,
    duration: 0.6,
  })

  .from(".hero-name", {
    opacity: 0,
    y: 70,
    scale: 0.9,
    duration: 0.8,
  })

  .from(".hero-role", {
    opacity: 0,
    x: -50,
    duration: 0.5,
  })

  .from(".hero-description", {
    opacity: 0,
    y: 30,
    duration: 0.5,
  })

  .from(".hero-buttons", {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.5,
  })

  .from(".hero-social", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });

};