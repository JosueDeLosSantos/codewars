/* 
    Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

    @blue @@red @blue @@red @blue @@red @blue @@red @blue @@red @blue

    describe("Test Cases", function(){
    it("Should work for Sample Test Cases", function() {
    assert.equal(countRedBeads(0), 0);
    assert.equal(countRedBeads(1), 0);
    assert.equal(countRedBeads(3), 4);
    assert.equal(countRedBeads(5), 8);
  });
});
*/

export default function countRedBeads(n: number): number {
	return n < 2 ? 0 : (n - 1) * 2;
}
