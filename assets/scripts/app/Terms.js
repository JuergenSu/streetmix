import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const Terms = (props) => {
  const getCCLinkByLocale = (locale) => {
    let url, label
    switch (locale) {
      case 'ar':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.ar'
        label = 'Creative Commons نَسب المُصنَّف - الترخيص بالمثل 4.0 دولي (CC BY-SA 4.0)'
        break
      case 'de':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.de'
        // Official label
        // label = 'Creative Commons Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International (CC BY-SA 4.0)'
        // Translated by Julia Tahedl
        label = 'Creative Commons Namensnennung - Share Alike 4.0 international (CC BY-SA 4.0)'
        break
      case 'es':
      case 'es-MX':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.es'
        label = 'Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)'
        break
      case 'fi':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.fi'
        label = 'Creative Commons Nimeä-JaaSamoin 4.0 Kansainvälinen (CC BY-SA 4.0)'
        break
      case 'fr':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr'
        label = 'Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International (CC BY-SA 4.0)'
        break
      case 'ja':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.ja'
        label = 'クリエイティブ・コモンズ 表示 - 継承 4.0 国際 (CC BY-SA 4.0)'
        break
      case 'pl':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.pl'
        label = 'Creative Commons Uznanie autorstwa-Na tych samych warunkach 4.0 Międzynarodowe (CC BY-SA 4.0)'
        break
      case 'pt':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.pt'
        label = 'Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)'
        break
      case 'pt-BR':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR'
        label = 'Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)'
        break
      case 'ru':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.ru'
        label = 'Creative Commons «Attribution-ShareAlike» («Атрибуция — На тех же условиях») 4.0 Всемирная (CC BY-SA 4.0)'
        break
      case 'sv':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.sv'
        label = 'Creative Commons Erkännande-DelaLika 4.0 Internationell (CC BY-SA 4.0)'
        break
      case 'zh':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.zh'
        label = 'Creative Commons 署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)'
      // eslint-disable-next-line no-fallthrough
      case 'zh-Hant':
      case 'zh-TW':
        url = 'https://creativecommons.org/licenses/by-sa/4.0/deed.zh_TW'
        label = 'Creative Commons 姓名標示-相同方式分享 4.0 國際 (CC BY-SA 4.0)'
        break
      case 'en':
      default:
        url = 'https://creativecommons.org/licenses/by-sa/4.0/'
        label = 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)'
        break
    }

    return { url, label }
  }

  const renderCCLink = (locale) => {
    const { url, label } = getCCLinkByLocale(locale)
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}&lrm;
      </a>
    )
  }

  return (
    <FormattedMessage
      id="dialogs.save.license"
      defaultMessage="This Streetmix-created image may be reused anywhere, for any purpose, under the {licenseLink} license."
      values={{
        // Get locale-specific license links!
        licenseLink: renderCCLink(props.locale)
      }}
    />
  )
}

Terms.propTypes = {
  locale: PropTypes.string.isRequired
}

export default Terms
