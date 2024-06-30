$(function () {
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
