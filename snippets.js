{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"query": {
		"prefix": "query",
		"body": [
			"var filters = []",
			"if (true) {",
			"   filters.push(new Filter('$1', FilterOperator.EQ, '$2'));",
			" }",
			"sap.ui.core.BusyIndicator.show(0);",
			"that.oDataModel.read('/$3Set', {",
			"filters: filters,",
			"success: function(oData) {",
			"   debugger",
			"   sap.ui.core.BusyIndicator.hide(0);",
			"},",
			"error: function(oError){",
			"   sap.ui.core.BusyIndicator.hide(0);",
			"  }",
			" })"
		],
		"description": "GetEntitySet(Query with Filters)"
	},

	"read": {
		"prefix": "read",
		"body": [
			"sap.ui.core.BusyIndicator.show(0);",
			"that.oDataModel.read('/$1Set()', {",
			"success: function(oData) {",
			"   debugger",
			"   sap.ui.core.BusyIndicator.hide(0);",
			"},",
			"error: function(oError){",
			"   sap.ui.core.BusyIndicator.hide(0);",
			"  }",
			" })"
		],
		"description": "GetEntity(Read)"
	},

	"deep": {
		"prefix": "deep",
		"body": [
			"var oEntry = {$1}",
			"sap.ui.core.BusyIndicator.show(0);",
			"that.oDataModel.create('/$2Set', oEntry, {",
			"success: function(oData) {",
			"   debugger",
			"   sap.ui.core.BusyIndicator.hide(0);",
			"},",
			"error: function(oError){",
			"   sap.ui.core.BusyIndicator.hide(0);",
			"  }",
			" })"
		],
		"description": "Deep Entity"
	}
}
