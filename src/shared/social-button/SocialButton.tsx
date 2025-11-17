import { Button } from "../button/Button";

type SocialType = "whatsapp" | "telegram";

interface IProps {
  type: SocialType;
  onClick: () => void;
  size?: "small" | "large";
}

export const SocialButton = ({ type, onClick, size = "large" }: IProps) => {
  const isSmall = size === "small";
  const buttonSize = isSmall ? "w-[80px] h-[80px]" : "w-[140px] h-[140px]";
  // WhatsApp SVG: 70 * (80/140) = 40
  const svgSize = isSmall ? 40 : 70;
  // Telegram внутренний круг: 71.8 * (80/140) = 41
  const telegramInnerSize = isSmall ? 41 : 71.8;
  // Telegram SVG: 40 * (80/140) = 22.86 ≈ 23
  const telegramSvgWidth = isSmall ? 23 : 40;
  // Telegram SVG height: 33 * (80/140) = 18.86 ≈ 19
  const telegramSvgHeight = isSmall ? 19 : 33;
  // Отступы: ml: 13 * (80/140) = 7.43 ≈ 7.4, mt: 22.8 * (80/140) = 13.03 ≈ 13
  const telegramMarginLeft = isSmall ? 7.4 : 13;
  const telegramMarginTop = isSmall ? 13 : 22.8;

  if (type === "whatsapp") {
    return (
      <Button onClick={onClick} className="active:scale-95">
        <div
          className={`${buttonSize} rounded-full flex-center relative`}
          style={{
            background: 'linear-gradient(180deg, #333333 0%, #000000 100%)',
            boxShadow: `
              0px 6.53px 8.17px 0px #FFFFFF12 inset,
              0px -16.34px 16.34px 0px #25D36624 inset
            `
          }}
        >
          <svg width={svgSize} height={svgSize} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M59.4404 10.0524C52.8845 3.49649 44.1432 0 34.9649 0C15.7342 0 0 15.7342 0 34.9649C0 41.0838 1.74827 47.2026 4.8077 52.4474L0 69.9298L18.3566 65.1221C23.6014 67.7445 29.2831 69.4927 34.9649 69.4927C54.1956 69.4927 69.9298 53.7585 69.9298 34.5278C69.9298 25.3496 65.9963 16.6083 59.4404 10.0524ZM50.6992 41.9579C49.825 41.5208 45.4544 39.3355 44.5803 39.3355C43.7062 38.8985 43.269 38.8985 42.832 39.7726C42.3949 40.6467 40.6468 42.3949 40.2097 43.2691C39.7726 43.7061 39.3355 43.7061 38.4614 43.7061C37.5872 43.2691 34.965 42.3949 31.4685 39.3355C28.8461 37.1502 27.0978 34.0908 26.6608 33.2167C26.2237 32.3425 26.6608 31.9055 27.0979 31.4684C27.5349 31.0314 27.9719 30.5943 28.409 30.1572C28.8461 29.7202 28.8461 29.2831 29.2832 28.846C29.7202 28.409 29.2832 27.9719 29.2832 27.5349C29.2832 27.0978 27.5349 22.7272 26.6608 20.9789C26.2237 19.6678 25.3496 19.6678 24.9126 19.6678C24.4755 19.6678 24.0383 19.6678 23.1642 19.6678C22.7271 19.6678 21.853 19.6678 20.9789 20.5419C20.1048 21.416 17.9195 23.6013 17.9195 27.9719C17.9195 32.3425 20.9789 36.2761 21.416 37.1502C21.853 37.5873 27.5348 46.7656 36.2761 50.2621C43.7061 53.3215 45.0174 52.4474 46.7656 52.4474C48.5139 52.4474 52.0103 50.2621 52.4474 48.5138C53.3215 46.3285 53.3215 44.5803 52.8845 44.5803C52.4474 42.395 51.5733 42.395 50.6992 41.9579Z" fill="url(#paint0_linear_1783_10301)"/>
            <defs>
            <linearGradient id="paint0_linear_1783_10301" x1="34.9649" y1="0" x2="34.9649" y2="69.9298" gradientUnits="userSpaceOnUse">
            <stop offset="0.198902" stopColor="#008733"/>
            <stop offset="1" stopColor="#9DFFC2"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </Button>
    );
  }

  return (
    <Button onClick={onClick} className="active:scale-95">
      <div
        className={`${buttonSize} rounded-full flex-center relative`}
        style={{
          background: 'linear-gradient(180deg, #333333 0%, #000000 100%)',
          boxShadow: `
            0px 6.53px 8.17px 0px #FFFFFF12 inset,
            0px -16.34px 16.34px 0px #0B75A5 inset
          `
        }}
      >
        <div
          style={{
            boxShadow: '0px 6.53px 8.17px 0px #FFFFFF1F inset, 0px -16.34px 16.34px 0px #0B75A5 inset',
            width: `${telegramInnerSize}px`,
            height: `${telegramInnerSize}px`
          }}
          className="rounded-full bg-[#34AADF]"
        >
          <svg
            style={{ marginLeft: `${telegramMarginLeft}px`, marginTop: `${telegramMarginTop}px` }}
            width={telegramSvgWidth}
            height={telegramSvgHeight}
            viewBox="0 0 40 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.40387 14.2299C2.40387 14.2299 19.7453 7.05719 25.7596 4.53151C28.0652 3.52132 35.8839 0.288432 35.8839 0.288432C35.8839 0.288432 39.4926 -1.12583 39.1918 2.30895C39.0915 3.72336 38.2896 8.6735 37.4877 14.0279C36.2848 21.6048 34.9817 29.8887 34.9817 29.8887C34.9817 29.8887 34.7812 32.2124 33.0772 32.6165C31.3731 33.0205 28.5663 31.2022 28.0652 30.798C27.6641 30.495 20.5472 25.9488 17.941 23.7262C17.2393 23.1201 16.4374 21.9079 18.0412 20.4935C21.6498 17.1597 25.9601 13.0177 28.5663 10.391C29.7693 9.17866 30.9721 6.34999 25.9601 9.78478C18.8432 14.7351 11.8264 19.3822 11.8264 19.3822C11.8264 19.3822 10.2225 20.3924 7.21537 19.4832C4.20808 18.5741 0.699693 17.3617 0.699693 17.3617C0.699693 17.3617 -1.70592 15.8463 2.40387 14.2299Z" fill="url(#paint0_linear_1783_9641)"/>
            <path d="M2.40387 14.2299C2.40387 14.2299 19.7453 7.05719 25.7596 4.53151C28.0652 3.52132 35.8839 0.288432 35.8839 0.288432C35.8839 0.288432 39.4926 -1.12583 39.1918 2.30895C39.0915 3.72336 38.2896 8.6735 37.4877 14.0279C36.2848 21.6048 34.9817 29.8887 34.9817 29.8887C34.9817 29.8887 34.7812 32.2124 33.0772 32.6165C31.3731 33.0205 28.5663 31.2022 28.0652 30.798C27.6641 30.495 20.5472 25.9488 17.941 23.7262C17.2393 23.1201 16.4374 21.9079 18.0412 20.4935C21.6498 17.1597 25.9601 13.0177 28.5663 10.391C29.7693 9.17866 30.9721 6.34999 25.9601 9.78478C18.8432 14.7351 11.8264 19.3822 11.8264 19.3822C11.8264 19.3822 10.2225 20.3924 7.21537 19.4832C4.20808 18.5741 0.699693 17.3617 0.699693 17.3617C0.699693 17.3617 -1.70592 15.8463 2.40387 14.2299Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_1783_9641" x1="43.6652" y1="-2.57958" x2="8.87836" y2="33.9173" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0685BE"/>
            <stop offset="0.418269" stopColor="#CAEEFF"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </Button>
  );
};
