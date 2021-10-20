//  Import built-in.
import * as React from "react";

//  Import context hook.
import { useAuth } from "lib/sbn-context";

//  Import styles.
import styles from "./Logo.module.scss";

//  Import plugins.
import stylePlugins from "utils/plugins/stylePlugins";


function Logo(props) {
  
  //  Using the context hook.
  const { darkMode } = useAuth();

  const modeStyle = stylePlugins(darkMode, styles["svg__dark"]);

  return (
    <a href="/">
      <svg
        className={`${styles["svg"]} ${modeStyle}`}
        width={299}
        height={176}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#prefix__clip0)">
          <path
            d="M189.304 123.508c.012.072.018.21.018.414 0 .456-.195.756-.585.9-.39.144-1.107.186-2.151.126l-1.746-.09-.576 1.098c-.384.744-.81 1.287-1.278 1.629-.468.342-1.092.579-1.872.711-.816.132-1.476.102-1.98-.09a2.672 2.672 0 01-1.017-.702 2.793 2.793 0 01-.603-1.035 5.52 5.52 0 01-.234-1.215 4.254 4.254 0 01.072-1.242c.108-.672.324-1.641.648-2.907s.546-2.193.666-2.781c.18-1.02.396-1.806.648-2.358.348-.792.624-1.404.828-1.836.192-.408.432-.888.72-1.44.156-.3.342-.744.558-1.332.144-.384.261-.672.351-.864.09-.192.219-.435.387-.729s.369-.54.603-.738c.234-.198.507-.375.819-.531.336-.168.669-.255.999-.261.33-.006.633.105.909.333.288.3.45.72.486 1.26.036.54.003 1.029-.099 1.467a9.614 9.614 0 01-.405 1.305c-.48 1.2-.798 2.088-.954 2.664-.132.516-.3.954-.504 1.314a296.498 296.498 0 00-1.458 2.592c-.504.9-1.176 1.914-2.016 3.042a4.945 4.945 0 00-.882 2.169c-.132.822-.024 1.305.324 1.449.012.024.072.06.18.108s.21.096.306.144c.108.048.204.102.288.162.18.096.333.138.459.126.126-.012.297-.084.513-.216.228-.168.531-.615.909-1.341s.567-1.251.567-1.575c0-.288.12-.564.36-.828s.492-.396.756-.396c.324 0 .744.276 1.26.828.264.264.492.447.684.549.192.102.345.153.459.153.114 0 .339-.024.675-.072a8.79 8.79 0 01.936-.09c.324-.036.561-.042.711-.018.15.024.237.072.261.144zm-8.55-6.606c-.24.696-.396 1.269-.468 1.719-.072.45-.054.711.054.783.12 0 .324-.324.612-.972l.963-1.935a53.06 53.06 0 00.981-2.043c.468-1.14.702-1.776.702-1.908 0-.384-.33-.216-.99.504-.42.504-.63.828-.63.972 0 .228-.162.618-.486 1.17-.252.444-.498 1.014-.738 1.71zm17.847 7.344c.264-.228.495-.321.693-.279.198.042.297.231.297.567a.792.792 0 01-.072.324 1.366 1.366 0 01-.162.279c-.06.078-.15.168-.27.27-.12.102-.213.177-.279.225a7.958 7.958 0 01-.306.207l-.261.171h-.018c-.072.132-.24.276-.504.432-.276.156-.54.252-.792.288-.264.132-.486.246-.666.342-.06.228-.552.726-1.476 1.494-.36.3-.66.558-.9.774-.24.216-.537.51-.891.882a4.999 4.999 0 00-.819 1.107c-.192.366-.294.711-.306 1.035 0 .144-.204.312-.612.504-.264.144-.459.216-.585.216-.126 0-.333-.066-.621-.198-.372-.18-.612-.444-.72-.792-.06-.348-.06-.636 0-.864.06-.228.195-.465.405-.711.21-.246.423-.453.639-.621.216-.168.438-.369.666-.603.228-.234.39-.453.486-.657.192-.408.36-.684.504-.828.168-.156.234-.375.198-.657-.036-.282-.156-.477-.36-.585-.228-.132-.582-.096-1.062.108-.78.312-1.443.264-1.989-.144-.546-.408-.873-1.098-.981-2.07-.06-.48.003-1.137.189-1.971.186-.834.273-1.443.261-1.827a4.81 4.81 0 01.234-1.548c.168-.54.426-.936.774-1.188.384-.264.786-.285 1.206-.063.42.222.648.561.684 1.017.012.24-.048.594-.18 1.062-.12.372-.333.969-.639 1.791s-.513 1.455-.621 1.899c-.108.408-.159.744-.153 1.008.006.264.075.396.207.396.444 0 1.098-.498 1.962-1.494.864-.996 1.374-1.848 1.53-2.556.084-.372.18-.624.288-.756.132-.18.276-.552.432-1.116.192-.624.54-1.206 1.044-1.746.3-.312.546-.522.738-.63.18-.108.408-.162.684-.162.444 0 .702.09.774.27.06.12.063.321.009.603s-.123.54-.207.774l-.279.774c-.102.282-.159.489-.171.621a2.223 2.223 0 01-.108.45c-.024.072-.108.222-.252.45-.24.384-.444.837-.612 1.359a19.143 19.143 0 00-.468 1.773c-.144.66-.27 1.152-.378 1.476-.192.624-.264.954-.216.99.024.036.354-.087.99-.369a46.012 46.012 0 001.926-.909c.648-.324 1.02-.522 1.116-.594zm6.786.27c.192-.324.564-1.065 1.116-2.223.552-1.158 1.026-1.971 1.422-2.439.06-.084.126-.162.198-.234.144-.156.342-.273.594-.351.252-.078.48-.069.684.027.072.048.123.174.153.378.03.204.075.312.135.324.084.012.288-.096.612-.324.552-.384 1.422-.702 2.61-.954.48-.12.792-.168.936-.144.144.024.324.132.54.324.276.276.42.612.432 1.008.012.396-.12.768-.396 1.116-.204.3-.468.894-.792 1.782s-.486 1.5-.486 1.836c0 .24.081.501.243.783.162.282.36.516.594.702.234.186.447.279.639.279.288 0 .894-.24 1.818-.72s1.65-.936 2.178-1.368c.396-.3.678-.441.846-.423.168.018.252.195.252.531 0 .144-.063.309-.189.495a4.078 4.078 0 01-.495.585 7.737 7.737 0 01-.756.585 4.522 4.522 0 01-.882.477c-.792.372-1.362.642-1.71.81-.6.276-1.131.354-1.593.234-.462-.12-1.005-.492-1.629-1.116-.504-.504-.801-.849-.891-1.035-.09-.186-.135-.543-.135-1.071 0-.768.138-1.566.414-2.394.24-.828.336-1.278.288-1.35-.072-.072-.558.315-1.458 1.161-.9.846-1.782 1.74-2.646 2.682-.864.942-1.296 1.485-1.296 1.629 0 .12-.075.252-.225.396a1.76 1.76 0 01-.549.351c-.216.09-.408.117-.576.081-.276-.036-.468-.252-.576-.648-.084-.264-.096-.498-.036-.702.06-.204.264-.564.612-1.08zm17.679-8.442c-.336.084-.666-.036-.99-.36-.228-.228-.348-.378-.36-.45-.012-.072.072-.18.252-.324.252-.18.573-.27.963-.27s.657.09.801.27c.156.204.165.426.027.666-.138.24-.369.396-.693.468zm3.204 8.622c.084.144.087.282.009.414s-.297.348-.657.648c-.564.48-1.23.918-1.998 1.314a3.295 3.295 0 01-1.791.351 4.38 4.38 0 01-1.746-.531 4.832 4.832 0 01-1.413-1.17c-.564-.672-.732-1.566-.504-2.682.024-.084.072-.372.144-.864s.147-.927.225-1.305c.078-.378.165-.627.261-.747.108-.132.285-.222.531-.27a2.18 2.18 0 01.765-.009c.264.042.516.12.756.234.24.114.405.267.495.459.09.192.087.408-.009.648-.276.576-.414.978-.414 1.206 0 .216-.12.486-.36.81a1.62 1.62 0 00-.369.873c-.042.342.015.567.171.675.132.048.198.198.198.45 0 .216.156.462.468.738.216.204.387.318.513.342.126.024.357-.006.693-.09.492-.18 1.122-.546 1.89-1.098.612-.444 1.077-.696 1.395-.756.318-.06.567.06.747.36zm7.289-.036c.264-.228.495-.321.693-.279.198.042.297.237.297.585a.755.755 0 01-.072.306 1.366 1.366 0 01-.162.279c-.06.078-.15.168-.27.27-.12.102-.213.177-.279.225a7.958 7.958 0 01-.306.207c-.138.09-.219.147-.243.171a4.59 4.59 0 01-.9.468 15.358 15.358 0 01-1.188.63 6.528 6.528 0 01-.738.306 9.408 9.408 0 01-1.026.63c-.624.348-1.038.756-1.242 1.224-.06.12-.144.276-.252.468-.096.18-.21.366-.342.558-.12.18-.258.378-.414.594a62.02 62.02 0 00-.414.612c-.12.18-.246.354-.378.522l-.288.396c-.084.144-.351.357-.801.639-.45.282-.903.543-1.359.783-.972.48-1.584.312-1.836-.504-.108-.348-.162-.612-.162-.792 0-.096.021-.195.063-.297.042-.102.087-.195.135-.279.048-.084.117-.174.207-.27.09-.096.168-.174.234-.234l.252-.234a3.07 3.07 0 01.225-.198c.456-.444 1.068-.87 1.836-1.278.216-.12.534-.318.954-.594.552-.36.876-.564.972-.612.264-.144.594-.516.99-1.116.396-.6.546-.948.45-1.044-.072-.06-.384 0-.936.18-1.476.504-2.418-.03-2.826-1.602-.12-.432-.078-1.008.126-1.728.204-.72.498-1.362.882-1.926.228-.324.471-.636.729-.936.258-.3.558-.597.9-.891.342-.294.69-.546 1.044-.756a4.04 4.04 0 011.143-.459 2.767 2.767 0 011.17-.036c.432.072.756.24.972.504.216.264.327.564.333.9.006.336-.027.696-.099 1.08-.132.552-.291 1.08-.477 1.584s-.345.834-.477.99c-.156.192-.234.348-.234.468 0 .108-.162.474-.486 1.098-.3.66-.45 1.122-.45 1.386 0 .108.006.192.018.252.036-.06.165-.144.387-.252.222-.108.492-.228.81-.36.318-.132.531-.222.639-.27.924-.492 1.656-.948 2.196-1.368zm-7.02 5.814c.228-.384.264-.576.108-.576-.228 0-.66.258-1.296.774a13.772 13.772 0 00-1.701 1.629c-.498.57-.693.909-.585 1.017.252.24.774.036 1.566-.612a8.008 8.008 0 001.908-2.232zm1.566-5.868c.684-1.116 1.026-1.74 1.026-1.872 0-.264.09-.531.27-.801.18-.27.288-.591.324-.963.048-.348 0-.546-.144-.594-.156-.048-.471.075-.945.369s-.789.555-.945.783c-.048.072-.177.195-.387.369-.21.174-.429.381-.657.621-.228.24-.396.48-.504.72-.396.84-.546 1.446-.45 1.818.108.444.294.693.558.747.264.054.648-.081 1.152-.405.228-.132.462-.396.702-.792zm16.646-.36c.264-.228.495-.321.693-.279.198.042.297.231.297.567a.877.877 0 01-.045.279.984.984 0 01-.135.261c-.06.084-.123.159-.189.225a1.94 1.94 0 01-.252.207 5.26 5.26 0 00-.243.18c-.06.048-.144.108-.252.18l-.216.144a.138.138 0 00-.054.018c-.024.012-.036.024-.036.036a8.099 8.099 0 00-.144.099c-.06.042-.102.069-.126.081-.408.288-.774.486-1.098.594-.324.084-.726.15-1.206.198-1.224.132-2.136-.15-2.736-.846-.6-.696-1.026-1.968-1.278-3.816-.072-.588-.15-.882-.234-.882-.072 0-.498.336-1.278 1.008-.444.408-.762.732-.954.972-.096.096-.18.222-.252.378a5.487 5.487 0 00-.216.558c-.072.216-.126.36-.162.432l-.252.594-.27.666c-.048.108-.078.285-.09.531-.012.246-.057.441-.135.585-.078.144-.225.234-.441.27-.42.06-.78-.126-1.08-.558-.192-.264-.294-.462-.306-.594-.012-.132.054-.378.198-.738a1.65 1.65 0 00.09-.216c.024-.06.063-.171.117-.333l.108-.324.099-.288c.048-.138.087-.243.117-.315l.117-.288a4.1 4.1 0 01.135-.306l.144-.288c.054-.108.111-.216.171-.324.228-.408.399-1.035.513-1.881.114-.846.189-1.329.225-1.449.204-.852.606-2.07 1.206-3.654.108-.3.234-.753.378-1.359s.288-1.17.432-1.692c.144-.522.324-1.059.54-1.611.216-.552.507-1.02.873-1.404a2.603 2.603 0 011.269-.756c.408-.096.741-.075.999.063s.435.345.531.621c.096.276.147.603.153.981a6.63 6.63 0 01-.225 1.881c-.132.444-.342.96-.63 1.548-.288.576-.486.99-.594 1.242a7.429 7.429 0 01-.702 1.422c-.144.204-.357.543-.639 1.017-.282.474-.513.819-.693 1.035-.252.336-.528.666-.828.99a12.95 12.95 0 01-.216.207 4.051 4.051 0 00-.279.288.704.704 0 00-.153.261c-.012.036-.003.078.027.126s.063.066.099.054a.175.175 0 00.09-.036c.096-.072.228-.192.396-.36.168-.168.327-.3.477-.396.15-.096.309-.156.477-.18l.288-.036c.516-.06.933-.012 1.251.144.318.156.585.438.801.846.192.42.288.9.288 1.44 0 .48.078 1.044.234 1.692.144.648.306 1.134.486 1.458.108.192.228.306.36.342.132.036.402.03.81-.018.492-.06.894-.15 1.206-.27.816-.432 1.464-.84 1.944-1.224zm-6.984-10.998l-.108.207c-.048.09-.09.174-.126.252a7.995 7.995 0 01-.108.225 9.586 9.586 0 00-.63 1.728c-.06.228-.132.459-.216.693-.084.234-.189.513-.315.837l-.261.666c-.072.192-.06.318.036.378.048.036.114.012.198-.072a2.95 2.95 0 00.486-.639c.132-.234.261-.507.387-.819.126-.312.231-.552.315-.72.348-.636.642-1.434.882-2.394.024-.06.072-.171.144-.333s.132-.306.18-.432a1.75 1.75 0 00.099-.423c.018-.156-.015-.258-.099-.306-.084-.072-.186-.036-.306.108-.096.096-.222.318-.378.666-.048.12-.108.246-.18.378zm16.191 11.574c.276-.192.51-.255.702-.189.192.066.276.267.252.603a.93.93 0 01-.252.504 6.04 6.04 0 01-.207.198 1.74 1.74 0 01-.261.189 3.798 3.798 0 01-.27.153 15.71 15.71 0 00-.279.144c-.114.06-.189.102-.225.126-.3.156-.612.282-.936.378a9.692 9.692 0 01-.441.279c-.282.174-.603.366-.963.576-.36.21-.654.351-.882.423a6.413 6.413 0 01-.972.252c-.336.06-.69.099-1.062.117a3.34 3.34 0 01-1.071-.117 2.252 2.252 0 01-.855-.432c-.276-.252-.501-.597-.675-1.035a5.363 5.363 0 01-.342-1.422 13.637 13.637 0 01-.027-2.709c.012-.06.081-.573.207-1.539s.246-1.914.36-2.844l.171-1.395c-.144-.084-.414-.144-.81-.18a7.568 7.568 0 00-.738 0c-.588 0-1.002-.018-1.242-.054a.906.906 0 00-.207-.018h-.54a.702.702 0 01-.216-.027c-.054-.018-.087-.045-.099-.081-.024-.192.054-.33.234-.414a8.636 8.636 0 01.711-.414c.162-.084.381-.159.657-.225a3.07 3.07 0 01.846-.081c.9.084 1.461.111 1.683.081.222-.03.441-.159.657-.387.324-.3.756-1.086 1.296-2.358l.108-.216c.204-.48.372-.858.504-1.134.132-.276.318-.627.558-1.053.24-.426.504-.783.792-1.071.288-.288.588-.51.9-.666 1.008-.48 1.512-.45 1.512.09 0 .312-.234 1.014-.702 2.106-.132.3-.228.534-.288.702a4.946 4.946 0 00-.18.774c-.048.3-.162.6-.342.9-.288.504-.528.93-.72 1.278-.228.408-.312.648-.252.72.06.096.666.204 1.818.324.804.084 1.293.156 1.467.216.174.06.249.174.225.342-.024.228-.156.324-.396.288a5.775 5.775 0 00-.576-.018c-.288.012-.612.03-.972.054s-.732.06-1.116.108c-.372.048-.684.084-.936.108-.132.024-.306.408-.522 1.152a64.734 64.734 0 00-.711 2.709c-.258 1.062-.447 1.773-.567 2.133-.612 1.836-.534 3.096.234 3.78.348.312.672.462.972.45.18 0 .378-.066.594-.198.036-.048.159-.12.369-.216s.426-.183.648-.261l.684-.243c.234-.084.357-.126.369-.126.96-.384 1.734-.762 2.322-1.134zm1.875 1.26c-.132-.072-.15-.342-.054-.81s.258-.78.486-.936c.216-.192.537-.276.963-.252.426.024.819.126 1.179.306.372.204.576.372.612.504.036.132-.042.438-.234.918-.228.504-.459.834-.693.99-.234.156-.609.222-1.125.198-.588-.024-.882-.162-.882-.414s-.084-.42-.252-.504zM56.204 99.08c-3.072 0-5.688-.48-7.848-1.44-2.136-.984-3.912-2.304-5.328-3.96l-4.68 5.04h-.18V83.348h.18c.504 2.136 1.2 4.14 2.088 6.012.888 1.872 2.016 3.516 3.384 4.932 1.392 1.416 3.06 2.532 5.004 3.348 1.968.792 4.272 1.188 6.912 1.188 2.472 0 4.62-.456 6.444-1.368 1.848-.936 3.288-2.268 4.32-3.996 1.032-1.752 1.548-3.864 1.548-6.336 0-2.064-.528-3.804-1.584-5.22-1.056-1.44-2.448-2.676-4.176-3.708a47.203 47.203 0 00-5.724-2.952 203.663 203.663 0 01-6.228-2.88 32.36 32.36 0 01-5.688-3.528 16.173 16.173 0 01-4.176-4.932c-1.056-1.92-1.584-4.26-1.584-7.02 0-2.736.708-5.124 2.124-7.164 1.416-2.04 3.276-3.624 5.58-4.752 2.304-1.128 4.812-1.692 7.524-1.692 2.352 0 4.488.372 6.408 1.116a12.699 12.699 0 015.004 3.456l4.608-4.572h.18v15.156h-.18c-.624-3.312-1.644-6.072-3.06-8.28-1.416-2.208-3.168-3.852-5.256-4.932-2.088-1.08-4.452-1.62-7.092-1.62-3.312 0-5.82.852-7.524 2.556-1.704 1.704-2.556 3.924-2.556 6.66 0 1.848.516 3.432 1.548 4.752 1.032 1.296 2.388 2.448 4.068 3.456a63.508 63.508 0 005.58 2.844c2.04.912 4.08 1.908 6.12 2.988a28.155 28.155 0 015.58 3.78c1.68 1.44 3.036 3.18 4.068 5.22 1.056 2.04 1.584 4.524 1.584 7.452 0 3.168-.708 5.94-2.124 8.316-1.416 2.352-3.408 4.188-5.976 5.508-2.544 1.296-5.508 1.944-8.892 1.944zm50.46-.36c-1.248 0-2.412-.168-3.492-.504a5.128 5.128 0 01-2.592-1.836c-.648-.888-.972-2.172-.972-3.852V76.076c0-1.728-.144-3.468-.432-5.22-.264-1.752-.852-3.216-1.764-4.392-.912-1.176-2.328-1.764-4.248-1.764a15.86 15.86 0 00-3.924.504c-1.32.312-2.544.768-3.672 1.368-1.104.6-2.004 1.332-2.7 2.196-.672.864-1.008 1.86-1.008 2.988h-.108c0-1.296.444-2.328 1.332-3.096.888-.792 1.896-1.188 3.024-1.188 1.176 0 2.232.36 3.168 1.08.96.72 1.44 1.74 1.44 3.06 0 1.512-.492 2.628-1.476 3.348-.96.696-2.004 1.044-3.132 1.044-1.272 0-2.328-.36-3.168-1.08-.84-.744-1.26-1.8-1.26-3.168 0-1.2.36-2.256 1.08-3.168.72-.912 1.704-1.68 2.952-2.304 1.248-.648 2.64-1.14 4.176-1.476a22.675 22.675 0 014.788-.504c3.432 0 6.036.564 7.812 1.692 1.776 1.104 2.976 2.556 3.6 4.356.648 1.776.972 3.684.972 5.724v18.612c0 .84.18 1.572.54 2.196.36.6 1.044.9 2.052.9.792 0 1.692-.384 2.7-1.152 1.032-.768 1.86-1.836 2.484-3.204l.108.108c-.648 1.56-1.716 2.82-3.204 3.78-1.464.936-3.156 1.404-5.076 1.404zm-17.244 0c-3.12 0-5.616-.792-7.488-2.376-1.848-1.608-2.772-3.78-2.772-6.516 0-3.216 1.356-5.676 4.068-7.38 2.712-1.728 6.624-2.592 11.736-2.592h7.992v.18h-7.308c-2.016 0-3.624.516-4.824 1.548a8.43 8.43 0 00-2.52 3.672c-.504 1.44-.756 2.808-.756 4.104 0 1.176.132 2.388.396 3.636.288 1.224.78 2.256 1.476 3.096.696.816 1.632 1.224 2.808 1.224 1.344 0 2.568-.42 3.672-1.26 1.128-.84 2.028-2.16 2.7-3.96.672-1.824 1.008-4.188 1.008-7.092h.144c0 2.76-.36 5.172-1.08 7.236-.696 2.064-1.8 3.66-3.312 4.788-1.512 1.128-3.492 1.692-5.94 1.692zm36.041-45.792c-1.32 0-2.46-.468-3.42-1.404-.936-.96-1.404-2.1-1.404-3.42 0-1.344.468-2.484 1.404-3.42.96-.936 2.1-1.404 3.42-1.404 1.344 0 2.484.468 3.42 1.404.936.936 1.404 2.076 1.404 3.42 0 1.32-.468 2.46-1.404 3.42-.936.936-2.076 1.404-3.42 1.404zm3.708 11.952v32.94h4.428V98h-16.344v-.18h4.428V65.06h-4.428v-.18h11.916zm24.765 51.84c-2.112 0-4.128-.18-6.048-.54-1.896-.36-3.6-.936-5.112-1.728-1.488-.768-2.664-1.752-3.528-2.952-.864-1.2-1.296-2.628-1.296-4.284 0-1.608.384-2.94 1.152-3.996a8.798 8.798 0 012.952-2.52 14.02 14.02 0 013.564-1.332c1.2-.264 2.208-.396 3.024-.396h.144c-1.464.912-2.388 1.956-2.772 3.132-.384 1.2-.576 2.628-.576 4.284 0 1.536.324 3.072.972 4.608a9.396 9.396 0 003.096 3.888c1.416 1.032 3.24 1.548 5.472 1.548 1.824 0 3.552-.252 5.184-.756 1.656-.48 3.12-1.188 4.392-2.124 1.272-.912 2.268-2.004 2.988-3.276.744-1.272 1.116-2.7 1.116-4.284 0-1.56-.456-2.844-1.368-3.852-.888-.984-2.052-1.728-3.492-2.232a13.212 13.212 0 00-4.464-.756H151.378c-3.36 0-6.06-.48-8.1-1.44-2.016-.96-3.024-2.508-3.024-4.644 0-1.296.348-2.4 1.044-3.312.696-.912 1.644-1.644 2.844-2.196 1.224-.576 2.604-.996 4.14-1.26a26.343 26.343 0 014.86-.432v.18c-.744 0-1.548.072-2.412.216-.864.144-1.692.384-2.484.72-.792.336-1.44.768-1.944 1.296-.504.504-.756 1.128-.756 1.872 0 1.176.648 1.896 1.944 2.16 1.32.264 2.964.396 4.932.396h2.196a46.888 46.888 0 011.8-.036c.6-.024 1.236-.036 1.908-.036 1.344 0 2.688.132 4.032.396a9.302 9.302 0 013.672 1.584c1.104.768 1.992 1.896 2.664 3.384.672 1.488 1.008 3.456 1.008 5.904 0 2.184-.42 4.068-1.26 5.652a11.325 11.325 0 01-3.456 3.996c-1.464 1.056-3.144 1.848-5.04 2.376-1.896.528-3.9.792-6.012.792zm-.828-30.672c-1.512 0-3.06-.192-4.644-.576-1.56-.408-3-1.044-4.32-1.908a10.066 10.066 0 01-3.204-3.384c-.816-1.392-1.224-3.084-1.224-5.076 0-1.992.408-3.672 1.224-5.04a10.066 10.066 0 013.204-3.384 13.89 13.89 0 014.32-1.872 18.578 18.578 0 014.644-.612c1.536 0 3.072.204 4.608.612a13.075 13.075 0 014.212 1.872 9.54 9.54 0 013.096 3.384c.792 1.368 1.188 3.048 1.188 5.04s-.396 3.684-1.188 5.076a9.54 9.54 0 01-3.096 3.384 13.69 13.69 0 01-4.212 1.908 18.936 18.936 0 01-4.608.576zm0-.18c1.32 0 2.388-.516 3.204-1.548.816-1.056 1.416-2.4 1.8-4.032a22.88 22.88 0 00.576-5.184c0-1.824-.192-3.552-.576-5.184-.384-1.656-.984-2.988-1.8-3.996-.816-1.032-1.884-1.548-3.204-1.548-1.296 0-2.352.516-3.168 1.548-.816 1.008-1.416 2.34-1.8 3.996-.384 1.632-.576 3.36-.576 5.184 0 1.8.096 3.528.288 5.184.216 1.632.708 2.976 1.476 4.032.792 1.032 2.052 1.548 3.78 1.548zM172.87 74.42c-.96 0-1.848-.336-2.664-1.008-.816-.672-1.224-1.632-1.224-2.88 0-1.272.408-2.184 1.224-2.736.84-.576 1.728-.864 2.664-.864.936 0 1.836.288 2.7.864.864.552 1.296 1.356 1.296 2.412h-.108c0-1.344-.504-2.592-1.512-3.744-.984-1.176-2.424-1.764-4.32-1.764-1.032 0-2.16.252-3.384.756-1.2.48-2.316 1.32-3.348 2.52-1.008 1.2-1.752 2.868-2.232 5.004l-.18-.036c.48-2.208 1.248-3.912 2.304-5.112 1.08-1.224 2.232-2.076 3.456-2.556 1.248-.504 2.376-.756 3.384-.756 1.272 0 2.352.276 3.24.828.912.552 1.596 1.272 2.052 2.16.48.864.72 1.764.72 2.7 0 1.608-.432 2.712-1.296 3.312-.864.6-1.788.9-2.772.9zm25.758 24.3c-3.432 0-6.408-.792-8.928-2.376a16.265 16.265 0 01-5.796-6.3c-1.368-2.616-2.052-5.484-2.052-8.604 0-3.12.684-5.988 2.052-8.604a16.265 16.265 0 015.796-6.3c2.52-1.584 5.496-2.376 8.928-2.376 3.456 0 6.444.792 8.964 2.376 2.52 1.584 4.452 3.684 5.796 6.3 1.368 2.616 2.052 5.484 2.052 8.604 0 3.12-.684 5.988-2.052 8.604-1.344 2.616-3.276 4.716-5.796 6.3-2.52 1.584-5.508 2.376-8.964 2.376zm0-.18c1.8 0 3.252-.54 4.356-1.62s1.944-2.484 2.52-4.212c.576-1.728.96-3.588 1.152-5.58.216-1.992.324-3.888.324-5.688 0-1.824-.108-3.72-.324-5.688-.192-1.992-.576-3.852-1.152-5.58-.576-1.728-1.416-3.132-2.52-4.212-1.104-1.08-2.556-1.62-4.356-1.62-1.776 0-3.216.54-4.32 1.62s-1.944 2.484-2.52 4.212c-.576 1.728-.972 3.588-1.188 5.58a58.622 58.622 0 00-.288 5.688c0 1.8.096 3.696.288 5.688.216 1.992.612 3.852 1.188 5.58.576 1.728 1.416 3.132 2.52 4.212 1.104 1.08 2.544 1.62 4.32 1.62zm33.962-33.66v32.94h4.14V98h-16.056v-.18h4.464V65.06h-4.464v-.18h11.916zm21.996 10.152V97.82h4.428V98h-16.056v-.18h4.104V75.644c0-2.016-.084-3.828-.252-5.436-.168-1.632-.54-2.916-1.116-3.852-.576-.936-1.488-1.404-2.736-1.404-2.328 0-4.188.576-5.58 1.728-1.392 1.128-2.436 2.58-3.132 4.356a22.823 22.823 0 00-1.332 5.58c-.216 1.944-.324 3.72-.324 5.328l-.18.288c0-1.704.108-3.588.324-5.652a22.181 22.181 0 011.44-5.94c.768-1.896 1.956-3.444 3.564-4.644 1.608-1.224 3.816-1.836 6.624-1.836 2.76 0 4.872.468 6.336 1.404 1.488.936 2.508 2.232 3.06 3.888.552 1.632.828 3.492.828 5.58zM137 102v-1H38v1h99zM172 101v1h87v-1h-87z"
            fill="#000"
          />
          <path
            d="M137 102v-1H38v1h99zM172 101v1h87v-1h-87z"
            stroke="#000"
            strokeWidth={0.2}
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path
              fill="#fff"
              transform="rotate(90 149.5 149.5)"
              d="M0 0h176v299H0z"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

export default Logo;
/*
import * as React from "react";

function Logo(props) {

  const styles = props.theme === "light" ? { "fill": "black" } : { "fill": "white" };

  return (
    <svg
      width={227}
      height={81}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fill="#000">
        <path style={styles} d="M43.742 7.066l.563 12.657h-2.813c-1.476-4.172-3.164-7.078-5.062-8.72-1.875-1.663-4.149-2.495-6.82-2.495-2.274 0-4.15.715-5.626 2.144-1.476 1.43-2.215 3.082-2.215 4.957 0 2.32.774 3.914 2.32 4.782 1.548.867 4.208 1.699 7.981 2.496 5.79 1.242 9.668 3.117 11.637 5.625 1.992 2.484 2.988 5.648 2.988 9.492 0 4.523-1.312 8.426-3.937 11.707-2.602 3.281-6.258 4.922-10.969 4.922-3.352 0-6.375-1.055-9.07-3.164a55.056 55.056 0 00-3.551 3.023h-2.355V40.746h2.742c2.062 7.734 6.07 11.602 12.023 11.602 3.14 0 5.555-.926 7.242-2.778 1.688-1.851 2.532-3.925 2.532-6.222 0-1.29-.375-2.45-1.125-3.48-.727-1.032-1.582-1.852-2.567-2.462-.984-.61-3.703-1.37-8.156-2.285-4.453-.914-7.723-2.625-9.809-5.133-2.062-2.508-3.093-5.636-3.093-9.386 0-4.032 1.265-7.442 3.796-10.23 2.555-2.79 5.73-4.184 9.528-4.184 2.883 0 5.754 1.007 8.613 3.023.914-.54 1.898-1.254 2.953-2.145h2.25zM69.09 37.863v-6.328c0-1.71-.211-2.918-.633-3.62-.422-.704-1.5-1.056-3.234-1.056-1.383 0-2.461.211-3.235.633-.773.399-1.16.809-1.16 1.23 0 .282.27.704.809 1.266.562.563.843 1.266.843 2.11 0 1.218-.457 2.273-1.37 3.164-.915.867-2.063 1.3-3.446 1.3-1.266 0-2.355-.41-3.27-1.23-.913-.844-1.37-1.863-1.37-3.059 0-2.062 1.218-3.808 3.656-5.238 2.46-1.453 5.86-2.18 10.195-2.18 3.352 0 6.152.422 8.402 1.266 2.274.844 3.41 2.742 3.41 5.695v14.836c0 2.555.715 3.832 2.145 3.832.399 0 .95-.222 1.652-.668l.95 1.582c-1.993 2.32-4.301 3.48-6.926 3.48-2.742 0-5.04-1.417-6.89-4.253-3.071 2.836-6.481 4.254-10.231 4.254-2.532 0-4.524-.656-5.977-1.969-1.453-1.336-2.18-2.988-2.18-4.957 0-6.258 5.954-9.621 17.86-10.09zm0 6.434v-4.57c-3.164.117-5.367.62-6.61 1.511-1.242.867-1.863 2.332-1.863 4.395 0 1.594.387 2.847 1.16 3.761.774.915 1.77 1.372 2.989 1.372 1.382 0 2.449-.457 3.199-1.371.75-.915 1.125-2.614 1.125-5.098zm20.039-31.465c0-1.43.492-2.637 1.477-3.621 1.007-1.008 2.214-1.512 3.62-1.512 1.43 0 2.649.504 3.657 1.512 1.031 1.008 1.547 2.215 1.547 3.621 0 1.406-.516 2.625-1.547 3.656C96.875 17.496 95.656 18 94.227 18c-1.407 0-2.614-.504-3.621-1.512-.985-1.031-1.477-2.25-1.477-3.656zm10.23 12.023v27h2.743V54H86.387v-2.145h3.375V27.88h-3.375v-2.18h4.465c2.32 0 4.265-.14 5.835-.422 1.57-.28 2.461-.422 2.672-.422zm32.59 4.36c1.383 1.594 2.074 3.445 2.074 5.555 0 3.023-1.289 5.484-3.867 7.382-2.554 1.899-5.437 2.848-8.648 2.848-.867 0-1.828-.059-2.883-.176a27.42 27.42 0 00-3.023-.176c-2.016 0-3.586.364-4.711 1.09-1.102.703-1.653 1.512-1.653 2.426 0 1.195 1.032 1.793 3.094 1.793 1.453 0 3.516-.129 6.188-.387 2.671-.258 5.66-.386 8.964-.386 6.375 0 9.563 3.023 9.563 9.07 0 4.477-1.641 7.969-4.922 10.477-3.258 2.507-7.477 3.761-12.656 3.761-4.172 0-7.524-.738-10.055-2.215-2.508-1.476-3.762-3.398-3.762-5.765 0-1.828 1.582-3.938 4.746-6.328-2.929-.961-4.394-3.223-4.394-6.786 0-4.218 2.332-6.925 6.996-8.12-3.609-2.133-5.414-4.922-5.414-8.368 0-2.601 1.16-4.922 3.48-6.96 2.321-2.063 5.602-3.095 9.844-3.095 3.985 0 7.301 1.079 9.949 3.235 1.008-2.742 2.496-4.113 4.465-4.113 2.016 0 3.024 1.148 3.024 3.445 0 2.015-.727 3.023-2.18 3.023-.609 0-1.16-.316-1.652-.949-.493-.656-.973-.984-1.442-.984-.351 0-.726.234-1.125.703zM120.91 43.207c1.688 0 2.719-.61 3.094-1.828.398-1.219.598-3.516.598-6.89 0-3.118-.211-5.227-.633-6.329-.399-1.101-1.489-1.652-3.27-1.652-1.429 0-2.414.469-2.953 1.406-.516.938-.773 3.422-.773 7.453 0 3.586.339 5.79 1.019 6.61.703.82 1.676 1.23 2.918 1.23zm-8.648 15.328c-.797 1.758-1.196 3.2-1.196 4.324 0 2.508.938 4.395 2.813 5.66 1.898 1.266 4.359 1.899 7.383 1.899 3.867 0 6.949-.95 9.246-2.848 2.297-1.875 3.445-3.972 3.445-6.293 0-2.109-1.348-3.164-4.043-3.164l-14.765.703c-.516 0-1.477-.093-2.883-.28zm43.347-3.656c-4.711 0-8.472-1.5-11.285-4.5-2.812-3-4.219-6.492-4.219-10.477 0-4.03 1.43-7.547 4.29-10.547 2.859-3 6.597-4.5 11.214-4.5 4.664 0 8.426 1.489 11.286 4.465 2.882 2.953 4.324 6.48 4.324 10.582 0 4.078-1.43 7.594-4.289 10.547-2.836 2.953-6.61 4.43-11.321 4.43zm0-28.23c-1.242 0-2.238.304-2.988.913-.75.586-1.207 1.5-1.371 2.743-.164 1.218-.246 4.418-.246 9.597 0 5.04.07 8.133.211 9.282.164 1.148.633 2.086 1.406 2.812.797.703 1.863 1.055 3.199 1.055 1.078 0 2.016-.305 2.813-.914.82-.633 1.312-1.758 1.476-3.375.164-1.64.246-4.407.246-8.297 0-6.07-.234-9.89-.703-11.461-.468-1.57-1.816-2.356-4.043-2.356zm32.485-1.794v5.977h.14c2.485-3.984 5.965-5.977 10.442-5.977 1.992 0 3.738.422 5.238 1.266 1.5.844 2.449 1.711 2.848 2.602.422.867.633 2.191.633 3.972v19.16h4.007V54h-17.683v-2.145h4.078V32.168c0-1.781-.246-2.941-.738-3.48-.469-.54-1.137-.81-2.004-.81-1.172 0-2.625.74-4.36 2.216-1.734 1.476-2.601 4.066-2.601 7.77v13.992h4.113V54h-17.789v-2.145h4.078V27.88h-4.008v-2.18h2.567c2.32 0 4.617-.14 6.89-.422l3.129-.422h1.02zM150.621 61.047v5.651h.035c.416-.656 1.023-.984 1.82-.984.744 0 1.409.34 1.995 1.02.586.673.879 1.555.879 2.645 0 1.084-.296 1.995-.888 2.733-.592.739-1.269 1.108-2.03 1.108-.774 0-1.366-.36-1.776-1.081h-.035v.967h-.255a14.877 14.877 0 00-1.925-.106h-1.169v-.536h.95V61.75h-.95v-.536h1.152c.322 0 .744-.03 1.265-.088l.677-.08h.255zm0 7.611v1.802c0 .75.132 1.295.396 1.635.263.34.556.51.879.51.281 0 .474-.147.58-.44.105-.293.158-.896.158-1.81v-1.943c0-1.043-.062-1.67-.185-1.88a.575.575 0 00-.536-.317c-.275 0-.559.21-.852.633-.293.416-.44 1.02-.44 1.81zm5.142-2.733h4.385v.545h-1.054l1.837 3.761 1.169-2.742c.14-.357.211-.592.211-.703 0-.21-.241-.316-.721-.316h-.325v-.545h2.742v.545c-.381 0-.636.047-.765.14-.129.088-.269.31-.422.668l-3.761 8.693c0 .152-.167.463-.501.931-.329.47-.818.704-1.468.704-.369 0-.677-.112-.923-.334-.246-.217-.369-.472-.369-.765 0-.287.099-.54.299-.756a.934.934 0 01.712-.325c.398 0 .726.228.984.685.076.135.155.203.237.203.199 0 .422-.296.668-.888L159.7 73l-3.234-6.53h-.703v-.545zM172.691 65.714v1.494h.036c.621-.996 1.491-1.494 2.61-1.494.498 0 .934.105 1.309.316.375.211.613.428.712.65.106.217.159.548.159.994v4.79h1.002V73h-4.421v-.536h1.019v-4.922c0-.445-.061-.735-.184-.87-.118-.135-.285-.202-.501-.202-.293 0-.657.184-1.09.553-.434.37-.651 1.017-.651 1.943v3.498h1.029V73h-4.448v-.536h1.02V66.47h-1.002v-.545h.642c.58 0 1.154-.035 1.722-.106l.783-.105h.254zm7.199-3.006c0-.357.123-.66.369-.905.252-.252.553-.378.905-.378.357 0 .662.126.914.378.258.252.387.553.387.905s-.129.656-.387.914a1.246 1.246 0 01-.914.378c-.352 0-.653-.126-.905-.378a1.28 1.28 0 01-.369-.914zm2.557 3.006v6.75h.686V73h-3.929v-.536h.844V66.47h-.844v-.545h1.116c.58 0 1.067-.035 1.459-.106.393-.07.616-.105.668-.105zm8.148 1.09c.345.398.518.861.518 1.388 0 .756-.322 1.372-.967 1.846a3.532 3.532 0 01-2.162.712c-.216 0-.457-.015-.72-.044a6.863 6.863 0 00-.756-.044c-.504 0-.897.09-1.178.273-.275.175-.413.377-.413.606 0 .299.258.448.773.448.364 0 .879-.032 1.547-.096a23.495 23.495 0 012.242-.097c1.593 0 2.39.756 2.39 2.267 0 1.12-.41 1.993-1.23 2.62-.815.627-1.869.94-3.164.94-1.043 0-1.881-.184-2.514-.554-.627-.369-.94-.85-.94-1.441 0-.457.395-.984 1.186-1.582-.732-.24-1.099-.806-1.099-1.696 0-1.055.583-1.732 1.749-2.03-.902-.534-1.353-1.231-1.353-2.092 0-.65.29-1.23.87-1.74.58-.516 1.4-.774 2.461-.774.996 0 1.825.27 2.487.808.252-.685.624-1.028 1.116-1.028.504 0 .756.287.756.862 0 .503-.181.755-.545.755-.152 0-.29-.079-.413-.237-.123-.164-.243-.246-.36-.246-.088 0-.182.058-.281.176zm-2.76 3.498c.422 0 .68-.153.773-.457.1-.305.15-.88.15-1.723 0-.78-.053-1.307-.158-1.582-.1-.275-.372-.413-.818-.413-.357 0-.603.117-.738.352-.129.234-.193.855-.193 1.863 0 .896.085 1.447.254 1.652.176.205.419.308.73.308zm-2.162 3.832c-.199.44-.299.8-.299 1.08 0 .628.234 1.1.703 1.416.475.316 1.09.475 1.846.475.967 0 1.737-.238 2.311-.712.575-.47.862-.994.862-1.574 0-.527-.337-.79-1.011-.79l-3.691.175c-.129 0-.37-.023-.721-.07zm10.485-13.087V67.4h.035c.545-1.125 1.392-1.687 2.54-1.687.504 0 1.011.158 1.521.475.51.316.765.931.765 1.845v4.43h1.002V73h-4.404v-.536h1.002v-4.94c0-.68-.225-1.02-.677-1.02-.539 0-.972.273-1.3.818-.323.54-.484.89-.484 1.055v4.087h1.029V73h-4.448v-.536h1.02V61.75h-1.09v-.536h.967c.51 0 1.057-.03 1.643-.088l.607-.08h.272zm9.668 2.68v2.198h1.776v.545h-1.776v4.799c0 .638.196.958.589.958.357 0 .627-.32.809-.958h.545c-.106.667-.34 1.145-.704 1.432-.363.281-.946.422-1.749.422-.574 0-.999-.09-1.274-.272-.27-.182-.437-.396-.501-.642a3.82 3.82 0 01-.097-.94v-4.8h-.984v-.544h.984V64.14l2.382-.414z" />
        <path style={styles} d="M23.582 56H106v1.74c-28.583-.29-86.248-.522-88.246.87-2.497 1.741-9.99 8.703-11.655 3.482C4.767 57.914 17.2 56.29 23.582 56zM207.231 58H138v-1.958c24.01.326 72.448.587 74.127-.98 2.097-1.957 8.391-9.79 9.79-3.915 1.119 4.7-9.324 6.527-14.686 6.853z" />
        <path style={styles}
          d="M214.956 20.038c-1.493-.248-5.374.597-8.956 5.971.498.249 3.582-.299 11.941-4.478.597-.597-1.741-1.244-2.985-1.493z"
          stroke={styles}
          strokeWidth={1.493}
        />
        <path style={styles}
          d="M213.72 27.316c-.953-.238-3.432-.572-5.72 0 .238.238 1.144.858 2.86 1.43 0 0 1.573.572 5.005 0 0-.238-.429-.858-2.145-1.43z"
          stroke={styles}
          strokeWidth={1.43}
        />
        <path style={styles}
          d="M102.941 69.267c-1.321.566-4.503 2.372-6.661 5.064.488.066 2.091-.014 4.596-.867 0 0 2.339-.726 5.829-4.43-.211-.278-1.259-.62-3.764.233z"
          stroke={styles}
          strokeWidth={2.092}
        />
        <path style={styles}
          d="M105.982 70.743c-.473.66-1.483 2.463-1.739 4.394.255-.11 1.006-.618 1.967-1.762 0 0 .918-1.034 1.522-3.844-.183-.073-.789.068-1.75 1.212z"
          stroke={styles}
          strokeWidth={1.181}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path style={styles} fill="#fff" d="M0 0h227v81H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
*/
/*
import * as React from "react";

function LogoCore(props) {
  return (
    <svg
      width={146}
      height={57}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fill="#000">
        <path d="M25.828 5.71l.375 8.438h-1.875c-.984-2.78-2.11-4.718-3.375-5.812-1.25-1.11-2.765-1.664-4.547-1.664-1.515 0-2.765.476-3.75 1.43-.984.953-1.476 2.054-1.476 3.304 0 1.547.515 2.61 1.547 3.188 1.03.578 2.804 1.133 5.32 1.664 3.86.828 6.445 2.078 7.758 3.75 1.328 1.656 1.992 3.765 1.992 6.328 0 3.016-.875 5.617-2.625 7.805-1.735 2.187-4.172 3.28-7.313 3.28-2.234 0-4.25-.702-6.047-2.108a36.742 36.742 0 00-2.367 2.015h-1.57v-9.164h1.828c1.375 5.156 4.047 7.734 8.016 7.734 2.093 0 3.703-.617 4.828-1.851 1.125-1.234 1.687-2.617 1.687-4.149 0-.859-.25-1.632-.75-2.32a5.875 5.875 0 00-1.71-1.64c-.657-.407-2.47-.915-5.438-1.524-2.969-.61-5.148-1.75-6.54-3.422-1.374-1.672-2.062-3.758-2.062-6.258 0-2.687.844-4.96 2.532-6.82 1.703-1.86 3.82-2.789 6.351-2.789 1.922 0 3.836.672 5.742 2.016.61-.36 1.266-.836 1.97-1.43h1.5zm16.899 20.532v-4.219c0-1.14-.141-1.945-.422-2.414-.282-.468-1-.703-2.157-.703-.921 0-1.64.14-2.156.422-.515.266-.773.54-.773.82 0 .188.18.47.539.844.375.375.562.844.562 1.406 0 .813-.304 1.516-.914 2.11-.61.578-1.375.867-2.297.867-.843 0-1.57-.273-2.18-.82-.609-.563-.913-1.242-.913-2.04 0-1.374.812-2.538 2.437-3.492 1.64-.968 3.906-1.453 6.797-1.453 2.234 0 4.102.282 5.602.844 1.515.563 2.273 1.828 2.273 3.797v9.89c0 1.704.477 2.555 1.43 2.555.265 0 .633-.148 1.101-.445l.633 1.055c-1.328 1.547-2.867 2.32-4.617 2.32-1.828 0-3.36-.945-4.594-2.836-2.047 1.89-4.32 2.836-6.82 2.836-1.688 0-3.016-.438-3.985-1.313-.968-.89-1.453-1.992-1.453-3.304 0-4.172 3.97-6.414 11.907-6.727zm0 4.29v-3.048c-2.11.078-3.579.414-4.407 1.008-.828.578-1.242 1.555-1.242 2.93 0 1.062.258 1.898.774 2.508.515.61 1.18.914 1.992.914.922 0 1.633-.305 2.133-.914.5-.61.75-1.742.75-3.399zM56.086 9.554c0-.953.328-1.758.984-2.414.672-.672 1.477-1.008 2.414-1.008a3.32 3.32 0 012.438 1.008c.687.671 1.031 1.476 1.031 2.414 0 .937-.344 1.75-1.031 2.437A3.32 3.32 0 0159.484 13c-.937 0-1.742-.336-2.414-1.008-.656-.687-.984-1.5-.984-2.437zm6.82 8.015v18h1.828V37H54.258v-1.43h2.25V19.586h-2.25v-1.453h2.976c1.547 0 2.844-.094 3.891-.281 1.047-.188 1.64-.282 1.781-.282zm21.727 2.907a5.478 5.478 0 011.383 3.703c0 2.015-.86 3.656-2.579 4.922C81.734 30.367 79.814 31 77.672 31c-.578 0-1.219-.04-1.922-.117a18.28 18.28 0 00-2.016-.117c-1.343 0-2.39.242-3.14.726-.735.469-1.102 1.008-1.102 1.617 0 .797.688 1.196 2.063 1.196.968 0 2.343-.086 4.125-.258 1.78-.172 3.773-.258 5.976-.258 4.25 0 6.375 2.016 6.375 6.047 0 2.984-1.094 5.312-3.281 6.984-2.172 1.672-4.984 2.508-8.438 2.508-2.78 0-5.015-.492-6.703-1.476-1.671-.985-2.507-2.266-2.507-3.844 0-1.219 1.054-2.625 3.164-4.219-1.954-.64-2.93-2.148-2.93-4.523 0-2.813 1.555-4.618 4.664-5.414-2.406-1.422-3.61-3.282-3.61-5.579 0-1.734.774-3.28 2.32-4.64 1.548-1.375 3.735-2.063 6.563-2.063 2.657 0 4.868.72 6.633 2.157.672-1.829 1.664-2.743 2.977-2.743 1.344 0 2.015.766 2.015 2.297 0 1.344-.484 2.016-1.453 2.016-.406 0-.773-.211-1.101-.633-.328-.437-.649-.656-.961-.656-.235 0-.485.156-.75.469zm-7.36 9.328c1.125 0 1.813-.407 2.063-1.22.266-.812.398-2.343.398-4.593 0-2.078-.14-3.484-.421-4.219-.266-.734-.993-1.101-2.18-1.101-.953 0-1.61.312-1.969.937-.344.625-.516 2.282-.516 4.97 0 2.39.227 3.858.68 4.405.469.547 1.117.82 1.945.82zm-5.765 10.218c-.531 1.172-.797 2.133-.797 2.883 0 1.672.625 2.93 1.875 3.774 1.266.843 2.906 1.265 4.922 1.265 2.578 0 4.633-.633 6.164-1.898 1.531-1.25 2.297-2.649 2.297-4.195 0-1.407-.899-2.11-2.696-2.11l-9.843.469c-.344 0-.985-.063-1.922-.188zm28.898-2.437c-3.14 0-5.648-1-7.523-3s-2.813-4.328-2.813-6.984c0-2.688.953-5.032 2.86-7.032 1.906-2 4.398-3 7.476-3 3.11 0 5.617.992 7.524 2.977 1.922 1.969 2.882 4.32 2.882 7.055 0 2.718-.953 5.062-2.859 7.03-1.891 1.97-4.406 2.954-7.547 2.954zm0-18.82c-.828 0-1.492.203-1.992.609-.5.39-.805 1-.914 1.828-.11.813-.164 2.945-.164 6.399 0 3.359.047 5.421.14 6.187.11.766.422 1.39.938 1.875.531.469 1.242.703 2.133.703.719 0 1.344-.203 1.875-.61.547-.421.875-1.171.984-2.25.11-1.093.164-2.937.164-5.53 0-4.047-.156-6.594-.468-7.641-.313-1.047-1.211-1.57-2.696-1.57zm21.656-1.196v3.985h.094c1.656-2.657 3.977-3.985 6.961-3.985 1.328 0 2.492.282 3.492.844 1 .563 1.633 1.14 1.899 1.734.281.579.422 1.461.422 2.649V35.57h2.672V37h-11.79v-1.43h2.719V22.445c0-1.187-.164-1.96-.492-2.32-.312-.36-.758-.54-1.336-.54-.781 0-1.75.493-2.906 1.477-1.156.985-1.735 2.711-1.735 5.18v9.328h2.743V37h-11.86v-1.43h2.719V19.586h-2.672v-1.453h1.711c1.547 0 3.078-.094 4.594-.281l2.086-.282h.679zM94.816 39.703V44.1h.028c.323-.51.795-.766 1.415-.766.579 0 1.096.264 1.552.793.455.524.683 1.21.683 2.058 0 .843-.23 1.551-.69 2.126-.46.574-.987.86-1.58.86-.601 0-1.061-.28-1.38-.84h-.028v.752h-.198A11.57 11.57 0 0093.121 49h-.91v-.417h.74V40.25h-.74v-.417h.896c.251 0 .58-.023.985-.068l.526-.062h.198zm0 5.92v1.401c0 .584.103 1.008.308 1.272.205.264.433.396.684.396.218 0 .369-.114.45-.341.083-.228.124-.698.124-1.409v-1.51c0-.812-.048-1.3-.144-1.463a.447.447 0 00-.417-.246c-.214 0-.435.164-.663.492-.228.323-.342.793-.342 1.408zm4-2.126h3.411v.424h-.821l1.429 2.926.909-2.133c.11-.278.164-.46.164-.547 0-.164-.187-.246-.56-.246h-.253v-.424h2.133v.424c-.297 0-.495.036-.595.11-.1.068-.21.24-.328.519l-2.926 6.76c0 .119-.13.36-.39.725-.255.365-.635.547-1.141.547a1.03 1.03 0 01-.718-.26.77.77 0 01-.287-.595c0-.223.077-.419.232-.587a.727.727 0 01.554-.253c.31 0 .565.178.766.533.059.105.12.157.184.157.155 0 .328-.23.52-.69l.779-1.887-2.516-5.08h-.547v-.423zM109.871 43.333v1.162h.027c.484-.775 1.16-1.162 2.031-1.162.387 0 .727.082 1.018.246.292.164.477.333.554.506.082.169.123.426.123.772v3.726h.779V49h-3.438v-.417h.793v-3.828c0-.347-.048-.572-.144-.677a.488.488 0 00-.389-.157c-.228 0-.511.144-.848.43-.337.288-.506.791-.506 1.511v2.721h.8V49h-3.459v-.417h.793v-4.662h-.779v-.424h.499c.451 0 .897-.027 1.339-.082l.609-.082h.198zm5.599-2.338c0-.278.095-.513.287-.704a.961.961 0 01.704-.294c.278 0 .515.098.711.294.2.196.301.43.301.704 0 .274-.101.51-.301.711a.969.969 0 01-.711.294.993.993 0 01-.991-1.005zm1.989 2.338v5.25h.533V49h-3.055v-.417h.656v-4.662h-.656v-.424h.868c.451 0 .829-.027 1.134-.082a6.22 6.22 0 01.52-.082zm6.337.848c.269.31.403.67.403 1.08 0 .588-.25 1.066-.752 1.435a2.746 2.746 0 01-1.681.554 5.11 5.11 0 01-.561-.034 5.326 5.326 0 00-.588-.034c-.392 0-.697.07-.916.212-.214.136-.321.294-.321.471 0 .233.2.349.601.349.283 0 .684-.025 1.204-.075.519-.05 1.1-.076 1.743-.076 1.239 0 1.859.588 1.859 1.764 0 .87-.319 1.55-.957 2.037-.633.488-1.454.732-2.461.732-.811 0-1.463-.144-1.955-.431-.488-.287-.731-.66-.731-1.121 0-.355.307-.766.922-1.23-.569-.187-.854-.627-.854-1.32 0-.82.453-1.346 1.36-1.579-.701-.415-1.052-.957-1.052-1.627 0-.506.225-.957.676-1.353.452-.402 1.09-.602 1.914-.602.775 0 1.42.21 1.935.629.196-.533.485-.8.868-.8.392 0 .588.223.588.67 0 .392-.141.588-.424.588-.118 0-.225-.062-.321-.185-.096-.127-.189-.191-.28-.191-.069 0-.142.046-.219.137zm-2.147 2.72c.329 0 .529-.118.602-.355.077-.237.116-.684.116-1.34 0-.606-.041-1.016-.123-1.23-.077-.215-.289-.322-.636-.322-.278 0-.469.091-.574.274-.1.182-.15.665-.15 1.449 0 .697.066 1.126.198 1.285.137.16.326.24.567.24zm-1.681 2.98c-.155.343-.233.623-.233.842 0 .487.183.854.547 1.1.369.246.848.37 1.436.37.752 0 1.351-.185 1.798-.554.446-.365.67-.773.67-1.224 0-.41-.262-.615-.787-.615l-2.871.137c-.1 0-.287-.019-.56-.055zm8.155-10.178v4.942h.027c.424-.875 1.083-1.312 1.976-1.312.392 0 .786.123 1.183.37.396.245.594.724.594 1.435v3.445h.78V49h-3.425v-.417h.779v-3.842c0-.528-.175-.793-.526-.793-.42 0-.757.212-1.012.636-.251.42-.376.693-.376.82v3.179h.8V49h-3.459v-.417h.793V40.25h-.848v-.417h.752c.397 0 .823-.023 1.278-.068l.472-.062h.212zm7.52 2.085v1.71h1.38v.423h-1.38v3.732c0 .497.152.745.458.745.278 0 .487-.248.628-.745h.424c-.082.52-.264.891-.547 1.115-.282.218-.736.328-1.36.328-.447 0-.777-.07-.991-.212-.21-.142-.34-.308-.39-.5a2.964 2.964 0 01-.075-.73V43.92h-.766v-.424h.766V42.11l1.853-.32zM15.076 38H67v.87c-18.007-.145-54.336-.26-55.595.435-1.573.87-6.294 4.352-7.343 1.74-.839-2.088 6.994-2.9 11.014-3.045z" />
        <path d="M134.33 39H89v-.87c15.721.145 47.436.26 48.535-.435 1.374-.87 5.495-4.352 6.411-1.74.732 2.088-6.106 2.9-9.616 3.045zM76.463 10.318c-3.545 1.101-5.907 6.423-6.646 8.946-.738 2.065-1.645 4.955.633 0 2.848-6.193 4.747-6.881 6.013-7.913 1.012-.826 2.742-.115 3.48.344.106 1.261.823 3.853 2.849 4.128 2.025.276 1.054-2.179.316-3.44-.738-1.147-3.101-3.166-6.645-2.065z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h146v57H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LogoCore;
*/

