ko.components.register('card', {
  viewModel: function(params) {
    var self = this;
    self.title = params.data.title;
    self.date = params.data.date;
  },
  template: {fromUrl:"template/card.html"}
});
