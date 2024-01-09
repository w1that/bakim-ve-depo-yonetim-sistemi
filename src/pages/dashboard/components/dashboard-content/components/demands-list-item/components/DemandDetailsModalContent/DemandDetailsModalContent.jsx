import React from "react";
import "./demand-details-modal-content.css";
import { useModal } from "../../../../../../../../components/modal/modalContext";
import JobOrderDetailsModalContent from "../job-order-details-modal-content/JobOrderDetailsModalContent";

function DemandDetailsModalContent({ demand }) {
  const { dispatch } = useModal();

  function showJobOrderDetails({ jobOrder }) {
    dispatch({
      type: "OPEN_MODAL",
      payload: <JobOrderDetailsModalContent jobOrder={jobOrder} demand = {demand}/>,
    });
  }

  function minimizeString(string, length) {
    if (string.length <= length) {
      return string;
    }

    return string.slice(0, length) + "...";
  }

  
  return (
    <div className="demand-details-modal-content">
      <div className="demand-details-modal-content__demand-info">
        <span className="demand-details-modal-content__demand-info-title">
          Talep Tarihi:
        </span>
        <span>{demand.date}</span>
      </div>

      <div className="demand-details-modal-content__demand-info">
        <span className="demand-details-modal-content__demand-info-title">
          Talep No:
        </span>
        <span>{demand.id}</span>
      </div>

      <div className="demand-details-modal-content__demand-job-orders">
        <span className="demand-details-modal-content__demand-job-orders-title">
          İş Emirleri
        </span>

        <div className="demand-details-modal-content__demand-job-orders-list">
          <table className="demand-details-modal-content__demand-job-orders-table">
            <thead className="demand-details-modal-content__demand-job-orders-table-head">
              <tr className="demand-details-modal-content__demand-job-orders-table-head-row">
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  Tarih
                </th>
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  İlgili Ekip
                </th>
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  Ekip Üyeleri
                </th>
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  Kullanılan Malzemeler
                </th>
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  Dış Servis
                </th>
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  Açıklama
                </th>
                <th className="demand-details-modal-content__demand-job-orders-table-head-row-data">
                  Kullanılan İş Ekipmanları
                </th>
              </tr>
            </thead>

            <tbody className="demand-details-modal-content__demand-job-orders-table-body">
              {demand.jobOrders.map((jobOrder, index) => (
                <tr
                  onClick={() => showJobOrderDetails({ jobOrder })}
                  className="demand-details-modal-content__demand-job-orders-table-body-row"
                  key={index}
                >
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.date ? jobOrder.date : "-"}
                  </td>
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.relatedTeam ? jobOrder.relatedTeam : "-"}
                  </td>
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.teamMemberIdsThatWorked.length > 0
                      ? minimizeString(jobOrder.teamMemberIdsThatWorked.join(", "), 10)
                      : "-"}
                  </td>
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.materialsThatUsed.length > 0
                      ? minimizeString(jobOrder.materialsThatUsed.join(", "), 10)
                      : "-"}
                  </td>
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.externalServicesThatUsed.length > 0
                      ? minimizeString(jobOrder.externalServicesThatUsed.join(", "), 10)
                      : "-"}
                  </td>
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.description ? minimizeString(jobOrder.description, 10) : "-"}
                  </td>
                  <td className="demand-details-modal-content__demand-job-orders-table-body-row-data">
                    {jobOrder.constructionEquipmentsThatUsed.length > 0
                      ? minimizeString( jobOrder.constructionEquipmentsThatUsed.join(", "), 10)
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="demand-details-modal-content__demand-info">
        <span className="demand-details-modal-content__demand-info-title">
          Durum:
        </span>
        <span className="demand-details-modal-content__demand-info-state">
          {demand.state}
        </span>
      </div>
    </div>
  );
}

export default DemandDetailsModalContent;
