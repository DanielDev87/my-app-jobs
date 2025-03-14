import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

const CusthomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.principal,
        card: colors.variante2,
        text:colors.default,
        border: colors.variante3,
        notification: colors.delicate},
    }

export default CusthomTheme;