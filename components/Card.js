export class Card {
  constructor(cardImgPath, durationTime, cardTitle, startTimes, basePrice, lastPrice, insertID) {
    this.cardImgPath = cardImgPath;
    this.durationTime = durationTime;
    this.cardTitle = cardTitle;
    this.startTimes = startTimes;
    this.basePrice = basePrice;
    this.lastPrice = lastPrice;
    this.insertID = insertID;
    this.clock = './assets/svg/icons/clock.svg';
  }

  createCardImg = () => {
    return (
      `
        <div class="card__img">
          <img src=${this.cardImgPath} />
        </div>
      `
    );
  }

  createCardDuration = () => {
    return (
      `
        <div class="card__duration-time">
          <div class="card__duration-time__clock">
            <img src=${this.clock} />
          </div>
          <div class="card__duration-time__hours">${this.durationTime}</div>
        </div>
      `
    );
  }

  createCardTitle = () => {
    return (`<div class="card__title">${this.cardTitle}</div>`);
  }

  createCardShortInfo = () => {
    return (
      `
      <div class="card__short-info">
        <ul>
          <li>Билет на целый день</li>
          <li>Неограниченное число катаний</li>
          <li>6 остановок у главных достопримечательностей</li>
          <li>Ближайший рейс сегодня</li>
        </ul>
      </div>
      `
    );
  }

  createCardStartTimes = () => {
    const cardStartTimes = document.createElement('div');
    cardStartTimes.classList.add('card__start-times');

    const isMore = this.startTimes.length > 4;

    this.startTimes.forEach((time, i) => {
      const div = document.createElement('div');
      div.textContent = time;

      if (isMore && i >= 3) {
        div.hidden = true;
        div.classList.add('card__start-times-hidden');
      }

      cardStartTimes.appendChild(div);

      if (isMore && i + 1 === this.startTimes.length) {
        const div = document.createElement('div');
        div.textContent = 'ещё...';
        div.classList.add('card__start-times-more');

        div.addEventListener('click', (e) => {
          const target = e.target;
          const hiddenTimes = target.parentNode.getElementsByClassName('card__start-times-hidden');

          for (let i = 0; i < hiddenTimes.length; i += 1) {
            hiddenTimes[i].removeAttribute('hidden');
          }

          target.remove();
        });

        cardStartTimes.appendChild(div);
      }
    });

    return cardStartTimes;
  }

  createCardConditions = () => {
    if (!this.lastPrice) {
      return (
        `
        <div class="card__conditions">
          <div class="card__conditions__prices">
            <div class="card__conditions__prices__base-price base-price-only">${this.basePrice} ₽</div>
          </div>
          <div class="card__conditions__btn">
            <button>Подробнее</button>
          </div>
        </div>
        `
      );
    } else {
        return (
          `
          <div class="card__conditions">
            <div class="card__conditions__prices">
              <div class="card__conditions__prices__base-price">${this.basePrice} ₽</div>
              <div class="card__conditions__prices__last-price">
                ${this.lastPrice }
              </div>
            </div>
            <div class="card__conditions__btn">
              <button>Подробнее</button>
            </div>
          </div>
          `
        );
    }
  }

  renderCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');

    const finalCardContent = {
      cardImg: this.createCardImg(),
      cardDuration: this.createCardDuration(),
      cardTitle: this.createCardTitle(),
      cardShortInfo: this.createCardShortInfo(),
      cardStartTimes: this.createCardStartTimes(),
      cardConditions: this.createCardConditions(),
    }

    for (let item in finalCardContent) {
      if (typeof finalCardContent[item] === 'object') {
        card.appendChild(finalCardContent[item]);
      } else {
        card.insertAdjacentHTML('beforeend', finalCardContent[item]);
      }
    }

    this.insertID.appendChild(card);
  }
}
