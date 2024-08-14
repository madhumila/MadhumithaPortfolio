import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend Developer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Backend Developer",
        1500,
        "Fullstack Developer",
        1500,
        "React Developer",
        1500,
        "MERN Stack Developer",
        1500,
        "NextJS Developer",
        1500,
        "Programmer",
        1500,
      ]}
      wrapper="span"
      className="text-[1.5rem] md:text-[2rem] text-white font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
