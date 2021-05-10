import React, { useEffect } from 'react';
import { SubContainer, Heading, Text, ContentContainer } from '@/components/ui';
import uniqid from 'uniqid';
import TableRow from './partials/TableRow';
import { heading, firstTwoPar, anotherThreePar, tableData } from './messages';
import './styles.scss';

const RenderUi = (): JSX.Element => (
  <ContentContainer className="pricelist">
    <SubContainer className="pricelist__content">
      <Heading className="pricelist__heading" as="h1">
        {heading}
      </Heading>
      <>
        {firstTwoPar.map((text) => (
          <Text key={uniqid()} className="pricelist__text" as="p">
            {text}
          </Text>
        ))}
      </>

      <ContentContainer className="pricelist__table">
        {tableData.map(({ heading, rows }, index) => (
          <TableRow heading={heading} rows={rows} key={index} />
        ))}
      </ContentContainer>

      <>
        {anotherThreePar.map((text) => (
          <Text key={uniqid()} className="pricelist__text" as="p">
            {text}
          </Text>
        ))}
      </>
    </SubContainer>
  </ContentContainer>
);

const Pricelist = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <RenderUi />;
};

export default Pricelist;
