import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n'
import { pageMeta } from '@/utils/meta'

const resolve = value => (typeof value === 'function' ? value() : value)

/**
 * Registers a page's SEO tags with Quasar's Meta plugin.
 *
 * Quasar 2 dropped the Options API `meta` component option, so pages call this
 * from setup(). The descriptor is rebuilt whenever the locale (or any other
 * reactive source used by the getters) changes.
 *
 * Pass `titleKey`/`descriptionKey` for translated text, or `title`/`description`
 * for values that are not i18n keys (a project name, for instance). String or
 * getter, both work.
 */
export function usePageMeta({
  title,
  titleKey,
  description,
  descriptionKey,
  path,
  image,
  noindex = false
}) {
  const { t, locale } = useI18n()

  useMeta(() =>
    pageMeta({
      title: titleKey ? t(titleKey) : resolve(title),
      description: descriptionKey ? t(descriptionKey) : resolve(description),
      path: resolve(path),
      image: resolve(image),
      locale: locale.value,
      noindex
    })
  )
}
