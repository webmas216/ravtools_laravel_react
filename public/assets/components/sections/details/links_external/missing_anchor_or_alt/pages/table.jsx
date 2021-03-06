define([
	'react',
	'underscore',
	'jsx!components/sections/details/links_external/missing_anchor_or_alt/pages/table',
	'jsx!components/common/table',
	'jsx!components/common/link'
], function(
	React,
	_,
	Details_Subtable,
	Table,
	Link
) {
	return React.createClass({
		render: function() {
			var self = this;

			var endpoint = '/auditor/links/pages?site_id=' + self.props.site_id + '&url_hash=' + self.props.url_hash + '&type=external_missing_anchor_or_alt';

			var columns = [
				{
					data: 'page_title',
					title: 'Page Title'
				},
				{
					data: 'url',
					title: 'Page URL'
				}
			];

			var callbacks = {
				onData: function(data) {
					return data;
				}
			};

			return (
				<Table id="details-sub-table" endpoint={endpoint} columns={columns} callbacks={callbacks} />
			);
		}
	});
});