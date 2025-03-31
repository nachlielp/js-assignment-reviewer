import React, { ChangeEvent } from "react";

interface ControllerProps {
  startAssignment: number;
  endAssignment: number;
  selectedStudent: string;
  studentData: Record<string, any>;
  onStartAssignmentChange: (value: number) => void;
  onEndAssignmentChange: (value: number) => void;
  onStudentChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onRangeChange: () => void;
  onPrevious: () => void;
  onNext: () => void;
  currentAssignmentIndex: number;
  totalAssignments: number;
}

export function Controller({
  startAssignment,
  endAssignment,
  selectedStudent,
  studentData,
  onStartAssignmentChange,
  onEndAssignmentChange,
  onStudentChange,
  onRangeChange,
  onPrevious,
  onNext,
  currentAssignmentIndex,
  totalAssignments,
}: ControllerProps) {
  return (
    <div className="section">
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div>
          <label style={{ fontWeight: 500 }}>Assignment Range</label>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <input
              type="number"
              value={startAssignment}
              onChange={(e) =>
                onStartAssignmentChange(parseInt(e.target.value))
              }
              min="1"
              max="60"
              placeholder="From"
              style={{
                width: "80px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
            <span style={{ alignSelf: "center" }}>to</span>
            <input
              type="number"
              value={endAssignment}
              onChange={(e) => onEndAssignmentChange(parseInt(e.target.value))}
              min="1"
              max="60"
              placeholder="To"
              style={{
                width: "80px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        <div>
          <label style={{ fontWeight: 500 }}>Select Student</label>
          <div style={{ marginTop: "8px" }}>
            <select
              value={selectedStudent}
              onChange={onStudentChange}
              style={{
                padding: "8px",
                width: "200px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <option value="">Choose a student</option>
              {Object.keys(studentData).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label style={{ fontWeight: 500 }}>Navigate Assignments</label>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <button
              onClick={onPrevious}
              disabled={
                currentAssignmentIndex === 0 || startAssignment >= endAssignment
              }
              className="secondary-btn"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              disabled={
                currentAssignmentIndex === totalAssignments - 1 ||
                startAssignment >= endAssignment
              }
              className="primary-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
