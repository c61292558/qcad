// Auto generated by Testing Dashboard
// File        : scripts/Draw/Text/Tests/Text07.js
// Timestamp   : 2015-10-05 16:34:35
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function Text07() {
    TdbTest.call(this, 'scripts/Draw/Text/Tests/Text07.js');
}

Text07.prototype = new TdbTest();

Text07.prototype.test00 = function() {
    qDebug('running Text07.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Text/Tests/data/text07.dxf');
    this.selectAll();
    this.triggerCommand('explode');
    this.deselectAll();
    this.verifyDrawing('Text07_000.dxf');
    this.tearDown();
    qDebug('finished Text07.test00()');
};

