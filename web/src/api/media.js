import request from "@/utils/request";

/**
 *
 * @param {*} data 查询所有附件
 * @returns
 */
export function list(params) {
  return request({
    url: `/api/media/list?${params}`,
    method: "get",
  });
}
/**
 * 
 * @param {*} 新增附件 
 * @returns 
 */
export function add(data) {
  return request({
    url: "/api/media/add",
    method: "post",
    data
  });
}
