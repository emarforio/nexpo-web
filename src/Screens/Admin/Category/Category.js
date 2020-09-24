import React, { useEffect } from 'react';
import { isEmpty, isNil } from 'lodash/fp';
import Attributes from './Attributes';
import NotFound from '../../NotFound';
import HtmlTitle from '../../../Components/HtmlTitle';

/**
 * Responsible for rendering a category. Category id is recieved via url
 */
type Props = {
  id: string,
  category: { attributes?: Array<any>, title?: string },
  getCategory: string => Promise<void>
};

const Category = ({ id, category, getCategory }: Props) => {
  useEffect(() => {
    getCategory(id);
  }, [getCategory, id]);

  if (isEmpty(category) || isNil(category)) {
    return <NotFound />;
  }

  const { title } = category;
  return (
    <div className="category-component">
      <HtmlTitle title={title} />

      <div className="left-col">
        <div className="paper main-info">
          <h1>{title}</h1>
        </div>

        <div className="paper categories">
          <h2>Attributes</h2>
          <Attributes ids={category.attributes || []} />
        </div>
      </div>
    </div>
  );
};

export default Category;
