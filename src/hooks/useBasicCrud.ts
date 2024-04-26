import { useState } from "react";

export const useBasicCrud = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);

  const toggleUpdateTable = () => {
    setUpdateTable((prev) => !prev);
  };

  const removeId = () => {
    setId(undefined);
  };

  return {
    showModal,
    setShowModal,
    updateTable,
    toggleUpdateTable,
    id,
    setId,
    removeId,
    loading,
    setLoading,
  };
};
