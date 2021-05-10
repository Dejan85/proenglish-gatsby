import React from 'react';

const ShowResultPate = ({ endTestMsg }) => (
  <div className="initialTest__show_result_page">
    <p className="initialTest__show_result_page_p">
      Vas trenutni nivo znanje je {`${endTestMsg}`}
    </p>
    <a href="/kursevi" className="initialTest__show_result_page_btn">
      Zavrsi test
    </a>
  </div>
);

export default ShowResultPate;
