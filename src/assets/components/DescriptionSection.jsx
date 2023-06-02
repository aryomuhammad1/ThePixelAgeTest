import React, { forwardRef } from "react";

const DescriptionSection = forwardRef((props, ref) => {
  const { descRef } = ref;

  return (
    <section
      ref={descRef}
      className="max-h[45vh] tablet:min-h-[100vh] max-w-[100vw] tablet:flex tablet:pt-[80vh] tablet:pb-[40vh]"
    >
      <div className="hidden tablet:block tablet:w-[50%] tablet:px-[5%]"></div>
      <div className="text-4xl pl-[8%] tablet:pl-[0] w-[100%] tablet:w-[50%] tablet:pr-[4%] text-lato tablet:text-3xl laptop:text-4xl ">
        <p className="w-[90%] tablet:w-[80%] leading-[1.4] mb-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt
          suscipit provident architecto neque aperiam iste quod. Cumque,
          officiis quibusdam. Vel fugiat quas quia tempora ipsum explicabo,
          commodi eos, voluptates nemo cumque autem nam corrupti aperiam rem,
          officia molestiae tenetur nisi ratione et. Consectetur in impedit
          obcaecati rem magnam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio, voluptate. Lorem ipsum dolor, sit amet
          consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Delectus, nam. <br />
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, odit perspiciatis, dignissimos in repellat alias
          incidunt ea id cum eaque suscipit exercitationem quidem possimus esse
          mollitia accusamus dolore deleniti reiciendis minima, omnis obcaecati!
          Ab hic, minus voluptatem delectus corrupti consequatur iste omnis
          placeat quia eveniet ratione, similique totam. Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
});

export default DescriptionSection;
