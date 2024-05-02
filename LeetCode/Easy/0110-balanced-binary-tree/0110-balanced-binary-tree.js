/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    let answer = true;

    dfs(root);

    return answer;

    function dfs(root){
        if(root === null) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);

        let check = Math.abs(left - right);

        if(check > 1){
            answer = false;
        }

        return Math.max(left, right) + 1;
    }
};