import React, { useEffect } from 'react';
import { isEmpty } from 'lodash/fp';

import DeadlineForm from '../../../Forms/DeadlineForm';
import NotFound from '../../NotFound';
import LoadingSpinner from '../../../Components/LoadingSpinner';

type UpdateValues = {
  name?: string,
  start?: string,
  end?: string
};
type Props = {
  id?: string,
  deadline: {},
  createDeadline: ({ deadline: {} }) => Promise<void>,
  fetching: boolean,
  getDeadline: string => Promise<void>,
  updateDeadline: (string, { deadline: {} }) => Promise<void>
};

const Deadline = ({
  id,
  deadline,
  createDeadline,
  fetching,
  getDeadline,
  updateDeadline
}: Props) => {
  useEffect(() => {
    if (id) getDeadline(id);
  }, [getDeadline, id]);

  const handleDeadline = (values: UpdateValues) => {
    if (isEmpty(deadline)) {
      createDeadline({ deadline: values });
    } else if (id) {
      updateDeadline(id, { deadline: values });
    }
  };

  if (fetching) return <LoadingSpinner />;
  if (id && isEmpty(deadline)) return <NotFound />;

  return (
    <div className="deadline">
      <h1>Deadline</h1>
      <DeadlineForm onSubmit={handleDeadline} initialValues={deadline} />
    </div>
  );
};

Deadline.defaultProps = {
  id: ''
};

export default Deadline;
