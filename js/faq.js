document.addEventListener("DOMContentLoaded", function () {
     const faqData = [{
               question: "Что такое ваш сервис?",
               answer: "Наш сервис предоставляет возможность быстро госпитализировать пациентов и управлять их медицинской информацией через мессенджеры, без лишних трудностей.",
          },
          {
               question: "Как быстро можно создать заявку на госпитализацию?",
               answer: "Заполнение заявки с нашим ботом займет всего несколько минут. Вся информация о пациенте доступна в одном месте, что упрощает процесс.",
          },
          {
               question: "Как я могу узнать статус госпитализации по заявке?",
               answer: "Вы всегда можете проверить статус госпитализаций по ваших заявках через интерфейс бота. Все данные прозрачны и доступны в реальном времени.",
          },
          {
               question: "Есть ли ограничения по использованию сервиса?",
               answer: "Нет, у нас нет ограничений. Кроме того, у нас есть партнерская программа, которая позволяет создавать пассивный доход для желающих больше заработать.",
          },
          {
               question: "Как связаться с вами, если у меня остались вопросы?",
               answer: "Если у вас возникли вопросы или вам необходима дополнительная информация, пожалуйста, свяжитесь с нами через Telegram или WhatsApp, нажав на соответствующую кнопку ниже."
          }
     ];

     const faqAccordion = document.getElementById('faq-accordion');

     faqData.forEach((faq, index) => {
          const faqItem = document.createElement('div');
          faqItem.classList.add('faq-item');

          const question = document.createElement('div');
          question.classList.add('faq-question');
          question.textContent = `${index + 1}.${faq.question}`;

          const answer = document.createElement('div');
          answer.classList.add('faq-answer');
          answer.textContent = faq.answer;

          faqItem.appendChild(question);
          faqItem.appendChild(answer);
          faqAccordion.appendChild(faqItem);
     });
});

