// 业绩查询
import ajax from '../fetch'

export default {
	/*
	**分销商个人团队业绩查询 statisticsPersonal
	*/
	personalFirst(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/DistributorPerformance/SelectPerformanceStatisticsFirst',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
	},
	/*
	**直属下级业绩查询
	*/
	statisticsPersonal(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/DistributorPerformance/SelectPerformanceStatisticsPersonal',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
	},
	/*
	**个人业绩明细查询
	*/
	selectPerformanceDetailed(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/DistributorPerformance/SelectPerformanceDetailed',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
	},
	/*
	**下级业绩明细查询
	*/
	selectPerformanceGradeDetailed(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/DistributorPerformance/SelectPerformanceGradeDetailed',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
	},
	/*
	**下下级业绩明细查询
	*/
	selectPerformanceSubordinateDetailed(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/DistributorPerformance/SelectPerformanceSubordinateDetailed',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
	},
}

