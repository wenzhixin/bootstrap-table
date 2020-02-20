$(function () {
  function createSupportItem (item) {
    if (!item.image) {
      item.image = 'https://images.opencollective.com/' + item.profile.split('/').pop() + '/avatar.png'
    }
    if (!item.website) {
      item.website = item.profile || ''
    }
    item.website = item.website.split(' ')[0]

    return [
      '<a class="support-item" href="' + item.website + '" target="_blank" title="$' + item.totalAmountDonated + ' by ' + item.name + '">',
      '<img class="support-silver-avatar" src="' + item.image + '" alt="' + item.name + '">',
      '</a>'
    ].join('')
  }

  $.getJSON('https://examples.wenzhixin.net.cn/opencollective/all.json', res => {
    res.sort(function (a, b) {
      return b.totalAmountDonated - a.totalAmountDonated
    })

    var organizations = res.filter(function (item) {
      return item.role === 'BACKER' && item.type === 'ORGANIZATION' && item.isActive
    })

    var backers = res.filter(function (item) {
      return item.role === 'BACKER' && item.type === 'USER' && item.isActive
    })

    $('.support-sponsors').html(organizations.map(createSupportItem).join(''))
    $('.support-backers').html(backers.map(createSupportItem).join(''))
  })
})
