import { getRequestConfig, RequestConfig } from "next-intl/server";
import { getUserLocale } from '../utils/locale';


export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale: locale,
    messages: {
      ...(await import(`./../messages/${locale}/common.json`).catch(
        () => ({}),
      )),
    },
  } as RequestConfig;
});
