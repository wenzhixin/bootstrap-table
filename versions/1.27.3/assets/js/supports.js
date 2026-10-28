function initSupports (translations) {
  const t = (key, params) => {
    let translation = translations[key] || key

    if (params && typeof translation === 'string') {
      Object.keys(params).forEach(param => {
        const placeholder = `{${param}}`

        translation = translation.replaceAll(placeholder, params[param])
      })
    }

    return translation
  }

  const ranks = [
    {
      key: 'platinum',
      title: t('supports.platinum_title'),
      minimum: 2000
    },
    {
      key: 'gold',
      title: t('supports.gold_title'),
      minimum: 200,
      maximum: 2000
    },
    {
      key: 'bronze',
      title: t('supports.bronze_title'),
      minimum: 20,
      maximum: 200
    },
    {
      key: 'backer',
      title: t('supports.backer_title'),
      minimum: 0,
      maximum: 20
    }
  ]

  const loadSupports = async () => {
    try {
      const response = await fetch('https://examples.wenzhixin.net.cn/opencollective/supports.json')
      const data = await response.json()
      const ranksWithSupports = ranks.map(rank => {
        const supports = data.filter(row =>
          row.totalDonations >= (rank.minimum || 0) &&
          row.totalDonations < (rank.maximum || Number.MAX_VALUE)
        )

        return {
          ...rank,
          supports
        }
      }).filter(rank => rank.supports && rank.supports.length > 0)

      const supportsContainer = document.getElementById('supports')

      if (!supportsContainer) {
        console.error('Supports container not found')
        return
      }

      supportsContainer.innerHTML = ''

      ranksWithSupports.forEach(rank => {
        const rankDiv = document.createElement('div')
        const titleDiv = document.createElement('div')
        const descDiv = document.createElement('div')

        rankDiv.className = 'supports pt-5 pb-5'

        const isBacker = rank.key === 'backer'

        if (isBacker) {
          titleDiv.innerHTML = `<h3>${t('supports.backer_title')}</h3>`
        } else {
          titleDiv.innerHTML = `<h3>${rank.title} ${t('supports.sponsor_title')}</h3>`
        }
        rankDiv.appendChild(titleDiv)
        descDiv.className = 'support-description'

        if (isBacker) {
          descDiv.innerHTML = `
            ${t('supports.backer_description')}
            <a href="https://opencollective.com/bootstrap-table#sponsor" target="_blank">
              ${t('supports.backer_link')}
            </a>
          `
        } else {
          const rangeText = rank.maximum ? t('supports.sponsor_range', { maximum: rank.maximum }) : t('supports.sponsor_or_more')

          descDiv.innerHTML = `
            ${t('supports.sponsor_description', { title: rank.title, sponsors: t('supports.sponsor_title'), minimum: rank.minimum, range: rangeText })}
            <a href="https://opencollective.com/bootstrap-table#section-contribute" target="_blank">
              ${t('supports.sponsor_link')}
            </a>
          `
        }
        rankDiv.appendChild(descDiv)

        const avatarsDiv = document.createElement('div')

        rank.supports.forEach(support => {
          const link = document.createElement('a')

          link.href = support.website || `https://opencollective.com/${support.slug}`
          link.title = `$${support.totalDonations} by ${support.name || support.slug}`
          link.className = `support-item ${rank.key}`
          link.target = '_blank'
          link.rel = support.rel || 'nofollow'

          const img = document.createElement('img')

          img.className = 'support-avatar'
          img.src = support.avatar || ''
          img.alt = support.name || support.slug
          img.onerror = function () {
            if (this.src !== (support.profileAvatar || '')) {
              this.src = support.profileAvatar || ''
            }
          }

          link.appendChild(img)
          avatarsDiv.appendChild(link)
        })

        rankDiv.appendChild(avatarsDiv)
        supportsContainer.appendChild(rankDiv)
      })
    } catch (error) {
      console.error('Failed to fetch supports:', error)
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSupports)
  } else {
    loadSupports()
  }
}

window.Supports = { initSupports }
