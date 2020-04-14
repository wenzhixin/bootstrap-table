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
      '<img class="support-' + (item.classes || 'silver') + '-avatar" src="' + item.image + '" alt="' + item.name + '">',
      '</a>'
    ].join('')
  }

  $.getJSON('https://examples.wenzhixin.net.cn/opencollective/all.json', function (res) {
    res.push({
      website: 'https://edubirdie.com/write-my-essay',
      totalAmountDonated: 300,
      name: 'Write my essay services from Edubirdie',
      image: window.baseurl + '/assets/images/edu-birdie.png',
      isActive: true,
      role: 'BACKER'
    })

    res.sort(function (a, b) {
      return b.totalAmountDonated - a.totalAmountDonated
    })

    var goldSponsors = res.filter(function (item) {
      var isGold = item.isActive &&
        item.role === 'BACKER' &&
        item.totalAmountDonated >= 100

      if (isGold) {
        item.classes = 'gold'
      }
      return isGold
    })

    var bronzeSponsors = res.filter(function (item) {
      return item.isActive &&
        item.role === 'BACKER' &&
        item.totalAmountDonated >= 10 &&
        item.totalAmountDonated < 100
    })

    var backers = res.filter(function (item) {
      return item.isActive &&
        item.role === 'BACKER' &&
        item.totalAmountDonated < 10
    })

    $('.gold-sponsors').html(goldSponsors.map(function (item) {
      return createSupportItem(item, 'gold')
    }).join(''))
    $('.bronze-sponsors').html(bronzeSponsors.map(createSupportItem).join(''))
    $('.support-backers').html(backers.map(createSupportItem).join(''))
  })
})
