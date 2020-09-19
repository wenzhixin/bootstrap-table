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

  $.getJSON('https://examples.wenzhixin.net.cn/opencollective/supports.json', function (res) {
    var ranks = [
      {
        title: 'Gold',
        minimum: 200
      },
      {
        title: 'Bronze',
        minimum: 20,
        maximum: 200
      },
      {
        title: 'Backer',
        maximum: 20
      }
    ]

    ranks.forEach(function (rank) {
      rank.supports = res.filter(function (row) {
        return row.totalDonations >= (rank.minimum || 0) &&
          row.totalDonations < (rank.maximum || Number.MAX_VALUE)
      })
    })

    new window.Vue({
      el: '#supports',
      data: {
        ranks: ranks
      }
    })
    $('#supports').show()
  })
})
