import request from "@/utils/request";
/**
 *
 * @returns 获取资源列表
 */
export function list() {
  return request({
    url: "/api/upload/list",
    method: "get"
  });
}
/**
 *
 * @param {*} data 上传接口
 * @returns
 */

export function uploadNetwork(data) {
  return request({
    url: "/api/upload/network",
    headers: {'Content-Type': 'multipart/form-data'},
    method: "post",
    data
  });
}

export function uploadLocal(data) {
  return request({
    url: "/api/upload/local",
    method: "post",
    data
  });
}
