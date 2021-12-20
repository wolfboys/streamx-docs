import Vue from "vue";
import LanguageDropdown from "@theme/components/Navbar/LanguageDropdown";
import NavLinks from "@theme/components/Navbar/NavLinks.vue";
import RepoLink from "@theme/components/Navbar/RepoLink.vue";
import SearchBox from "@SearchBox";
import SidebarButton from "@theme/components/Navbar/SidebarButton.vue";
import ThemeColor from "@ThemeColor";
let handler;
const css = (el, property) => {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const window = el.ownerDocument.defaultView;
    // `null` means not to return pseudo styles
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return window.getComputedStyle(el, null)[property];
};
export default Vue.extend({
    name: "Navbar",
    components: {
        LanguageDropdown,
        NavLinks,
        RepoLink,
        SearchBox,
        SidebarButton,
        ThemeColor,
    },
    data: () => ({
        linksWrapMaxWidth: 0,
        isMobile: false,
    }),
    computed: {
        siteBrandTitle() {
            return this.$site.title;
        },
        siteBrandLogo() {
            const { logo } = this.$themeConfig;
            return logo ? this.$withBase(logo) : "";
        },
        siteBrandDarkLogo() {
            const { darkLogo } = this.$themeConfig;
            return darkLogo ? this.$withBase(darkLogo) : "";
        },
        canHide() {
            const autoHide = this.$themeConfig.navAutoHide;
            return autoHide !== "none" && (autoHide === "always" || this.isMobile);
        },
    },
    mounted() {

        const hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f5eee941f39dd9e3086cb4455b9c33c1";
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);

        // Refer to config.styl
        const MOBILE_DESKTOP_BREAKPOINT = 719;
        const NAVBAR_HORIZONTAL_PADDING = parseInt(css(this.$el, "paddingLeft")) +
            parseInt(css(this.$el, "paddingRight"));
        handler = () => {
            if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
                this.isMobile = true;
                this.linksWrapMaxWidth = 0;
            }
            else {
                this.isMobile = false;
                this.linksWrapMaxWidth =
                    this.$el.offsetWidth -
                        NAVBAR_HORIZONTAL_PADDING -
                        ((this.$refs.siteInfo &&
                            this.$refs.siteInfo.$el &&
                            this.$refs.siteInfo.$el.offsetWidth) ||
                            0);
            }
        };
        handler();
        window.addEventListener("resize", handler);
        window.addEventListener("orientationchange", handler);
    },
    // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
    beforeDestroy() {
        window.removeEventListener("resize", handler);
        window.removeEventListener("orientationchange", handler);
    },
});
//# sourceMappingURL=Navbar.js.map
