import React, { useEffect } from 'react';
import { isEmpty } from 'lodash/fp';

import ProgrammeForm from '../../../Forms/ProgrammeForm';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import NotFound from '../../NotFound';

type Props = {
  id: string,
  programme: {
    email?: string,
    student?: number
  },
  fetching: boolean,
  getProgramme: string => Promise<void>,
  createProgramme: ({ programme: {} }) => Promise<void>,
  updateProgramme: (string, { programme: {} }) => Promise<void>
};

const Programme = ({
  id,
  programme,
  fetching,
  getProgramme,
  createProgramme,
  updateProgramme
}: Props) => {
  
  useEffect(() => {
    if (id) getProgramme(id);
  }, []);

  const handleProgramme = (values: { code?: string, name?: string }) => {
    if (isEmpty(programme)) {
      createProgramme({ programme: values });
    } else {
      updateProgramme(id, { programme: values });
    }
  };

  if (fetching) return <LoadingSpinner />;
  if (id && isEmpty(programme)) return <NotFound />;

  return (
    <div className="programme">
      <h1>Programme</h1>
      <ProgrammeForm
        onSubmit={handleProgramme}
        initialValues={programme}
      />
    </div>
  );
}

export default Programme;
