import svgPaths from "./svg-ozt4ipq5b3";
import img04 from "@/assets/09291840f03dd89fc00bf23e895fa6feb2c866c2.png";
import img05 from "@/assets/342162b937db95afee91c6b3d254c3f14eecc05f.png";
import img07 from "@/assets/2baefc042c6244077b8989b2028320245498b2dd.png";

function Component01() {
  return (
    <div className="absolute h-[276.742px] left-0 top-0 w-[1024px]" data-name="01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1024 277">
        <g clipPath="url(#clip0_29_239)" id="01">
          <path d={svgPaths.p1e09d8a8} fill="var(--fill-0, #D81F26)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_239">
            <rect fill="white" height="276.742" width="1024" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function G8() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 42">
      <g id="g8">
        <path d={svgPaths.p374e5a10} fill="var(--fill-0, #EA1D25)" id="path6" />
      </g>
    </svg>
  );
}

function Component02() {
  return (
    <div className="absolute h-[41.5px] left-0 overflow-clip top-[876.74px] w-[238.2px]" data-name="02">
      <G8 />
    </div>
  );
}

function Component03() {
  return (
    <div className="absolute left-0 size-[700px] top-[1518.24px]" data-name="03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 700">
        <g id="03">
          <path d={svgPaths.p2f9d5880} fill="var(--fill-0, #175EA8)" id="path2" />
        </g>
      </svg>
    </div>
  );
}

function Component06() {
  return (
    <div className="absolute h-[1253px] left-0 top-[4678.24px] w-[2500px]" data-name="06">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2500 1253">
        <g clipPath="url(#clip0_29_230)" id="06">
          <path clipRule="evenodd" d={svgPaths.pb6f1e70} fill="var(--fill-0, #1A335E)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_230">
            <rect fill="white" height="1253" width="2500" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9024() {
  return (
    <div className="h-[10627.2px] relative shrink-0 w-[4096px]">
      <Component01 />
      <Component02 />
      <Component03 />
      <div className="absolute h-[356px] left-0 top-[2818.24px] w-[1600px]" data-name="04">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img04.src} />
      </div>
      <div className="absolute h-[304px] left-0 top-[3774.24px] w-[1600px]" data-name="05">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img05.src} />
      </div>
      <Component06 />
      <div className="absolute left-0 size-[4096px] top-[6531.24px]" data-name="07">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img07.src} />
      </div>
    </div>
  );
}

export default function Frame9023() {
  return (
    <div className="content-stretch flex flex-col gap-[600px] items-start relative size-full">
      <Frame9024 />
    </div>
  );
}