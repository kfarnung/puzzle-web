import React from 'react';
import Tab from 'react-bootstrap/Tab';
import TabsView from '../../Common/TabsView';
import SemaphoreStream from '../../Semaphore/SemaphoreStream';
import SemaphoreTable from '../../Semaphore/SemaphoreTable';

function Semaphore() {
  return (
    <TabsView id="Semaphore-tabs">
      <Tab eventKey={1} title="Value">
        <SemaphoreStream />
      </Tab>
      <Tab eventKey={2} title="Reference">
        <SemaphoreTable />
      </Tab>
    </TabsView>
  );
}

export default Semaphore;
