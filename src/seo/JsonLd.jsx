import { Helmet } from 'react-helmet-async';

/**
 * JsonLd — injects one or more JSON-LD structured data blocks.
 *
 * @param {Object}        props
 * @param {Object|Array}  props.data – single schema object or array of schemas
 */
const JsonLd = ({ data }) => {
  if (!data) return null;

  // Wrap a single object into an array for uniform handling
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default JsonLd;
