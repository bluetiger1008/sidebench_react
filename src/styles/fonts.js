import GiroLight from "../assets/fonts/Giro_Light.otf";
import GothamBold from "../assets/fonts/Gotham_Bold.otf";
import GothamBook from "../assets/fonts/Gotham_Book.otf";
import GothamItalic from "../assets/fonts/Gotham_Italic.otf";
import GothamMedium from "../assets/fonts/Gotham_Medium.otf";

const Fonts = `
  @font-face {
    font-family: 'Giro Light';
    src: url(${GiroLight});
  }
  @font-face {
    font-family: 'Gotham Bold';
    src: url(${GothamBold});
  }
  @font-face {
    font-family: 'Gotham Book';
    src: url(${GothamBook});
  }
  @font-face {
    font-family: 'Gotham Italic';
    src: url(${GothamItalic});
  }
  @font-face {
    font-family: 'Gotham Medium';
    src: url(${GothamMedium});
  }
`;

export default Fonts;
