import { useMemo } from "react";

interface Props {
  data: any;
  activePage: number;
}

function usePagination({ data, activePage }: Props) {
  const pageSize = 6;

  const pageData = useMemo(() => {
    function paginate(array: any, pageSize: number, pageNumber: number) {
      return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

    return paginate(data, pageSize, activePage);
  }, [activePage]);

  return {
    data: pageData,
    allData: data,
    pagination: {
      size: pageSize,
      totalItemsCount: data.length,
      totalPages: Math.ceil(data.length / pageSize),
    },
  };
}

export default usePagination;
