import Backbone from 'backbone';
import Quote from '../models/quote';

const QuoteView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.tradeTemplate = params.tradeTemplate;
    console.log('init');
    console.log(params);
    console.log(this.template);
    console.log(this.tradeTemplate);

    // listen to changes in model and render
    this.listenTo(this.model, 'change', this.render);
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.btn-buy': 'buyQuote',
    'click button.btn-sell': 'sellQuote',
  },
  buyQuote() {
    this.model.buy();
    this.trigger('addTrade', this);
  },
  sellQuote() {
    this.model.sell();
    this.trigger('addTrade', this);
  },
});

export default QuoteView;
